const { default: axios } = require('axios');
const moment = require('moment-mini');
var fs = require('fs');

var monthsToFetch = 2;

async function fetchMonth(month) {
    var html = await axios
        .get(`https://app.connectmyclub.co.uk/clubs/training/ac9-5f817f76/${month}`)
        .then((response) => response.data);

    var data = JSON.parse(html.match(/<script>\s*var page\s*=(.+)(?=;)/s)[1]);

    var { sessions, dates } = data.training;

    var parsedSessions = Object.keys(sessions)
        .reduce((accumulator, currentValue, index, array) => {
            return [
                ...accumulator,
                ...Object.keys(data.training.sessions[currentValue].groups).map((group) => ({
                    ...data.training.sessions[currentValue].groups[group],
                    date: moment(dates.first_day)
                        .add(Number(data.training.sessions[currentValue].date) - 1, 'day')
                        .format('YYYY-MM-DD'),
                    time: data.training.sessions[currentValue].time,
                    id: undefined,
                    training_id: undefined,
                })),
            ];
        }, [])
        .filter((group) => group.leader && group.location.indexOf('CANCELLED') === -1);

    return parsedSessions;
}

async function exportTrainingSessions() {
    let sessions = [];

    for (let i = 0; i < monthsToFetch; i++) {
        const currentMonthSessions = await fetchMonth(i);

        sessions = [...sessions, ...currentMonthSessions];
    }

    const config = JSON.parse(fs.readFileSync('./public/config.json'));

    const sortedSessions = sortByDate(sessions);

    fs.writeFile('./public/config.json', JSON.stringify({ ...config, sessions: sortedSessions }, null, 2), (err) => {
        if (err) throw err;
        console.info('Training sessions written to file');
    });
}

function sortByDate(sessions) {
    return sessions.sort((a, b) => a.date.localeCompare(b.date));
}

exportTrainingSessions();

// exports.handler = async function (event, context) {
//     return { statusCode: 200, body: exportTrainingSessions() };
// };
