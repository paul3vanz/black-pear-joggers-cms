const { default: axios } = require('axios');
const moment = require('moment-mini');

var monthsToFetch = 1;

async function fetchMonth(month) {
    var html = await axios
        .get('https://app.connectmyclub.co.uk/clubs/training/ac9-5f817f76/0')
        .then((response) => response.data);

    var data = JSON.parse(html.match(/<script>\s*var page\s*=(.+)(?=;)/s)[1]);

    var { sessions, dates } = data.training;

    console.log(dates);
    console.log(sessions);

    var parsedSessions = data.training.groups
        .filter((group) => group.location.indexOf('CANCELLED') === -1)
        .map((group) => {
            return {
                ...group,
                date: moment(dates.first_day)
                    .add(Number(sessions.find((session) => session.id === group.training_id).date) - 1, 'day')
                    .format('YYYY-MM-DD'),
            };
        });

    console.log(parsedSessions);
}

fetchMonth(0);