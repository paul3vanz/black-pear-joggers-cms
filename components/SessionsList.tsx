import React, { useContext } from 'react';
import { classNames, friendlyDate, friendlyTime } from '../core/helpers';

import { Container } from './Container';
import { Group } from '../core/models/group.model';
import { Shimmer } from './Shimmer';
import { Stack } from './Stack';
import { TrainingContext } from '../core/providers/Training';
import moment from 'moment-mini';

export const SessionsList = () => {
    console.log(TrainingContext);

    const sessions: Group[] = useContext(TrainingContext);

    let upcomingSortedGroups;
    let dates;

    if (sessions && sessions.length) {
        upcomingSortedGroups = sessions.filter((session) =>
            moment(session.date, 'YYYY-MM-DD').startOf('day').isSameOrAfter(moment().startOf('day'))
        );

        dates = Array.from(new Set(upcomingSortedGroups.map((session) => session.date)));
    }

    return (
        <>
            <Stack>
                <Container>
                    <h1>Upcoming training sessions</h1>

                    <p>
                        To book on to a group, please use the{' '}
                        <a href="https://bpj.org.uk/2021/03/groups-now-available-to-book/">My Running Club</a> app.
                    </p>
                </Container>
            </Stack>

            <Stack backgroundColour="light">
                <Container>
                    {upcomingSortedGroups ? (
                        <>
                            {dates.map((date) => (
                                <div key={date}>
                                    <h2>{friendlyDate(date)}</h2>

                                    <ul>
                                        {upcomingSortedGroups
                                            .filter((group) => group.date === date)
                                            .sort((a, b) => {
                                                return `${a.time}`.localeCompare(b.time) === -1 ? -1 : 0;
                                            })
                                            .map((group) => (
                                                <li className="list-disc ml-5 mb-4" key={group.id}>
                                                    {friendlyTime(group.time)} <strong>{group.title}</strong> with{' '}
                                                    {group.leader}{' '}
                                                    <span className="text-gray-500 mr-1"> from {group.location}</span>
                                                    <GroupAvailability group={group} />
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            <h2>
                                <Shimmer width="150" />
                            </h2>

                            <ul>
                                <li className="list-disc ml-5 mb-4">
                                    <Shimmer width="400" />
                                </li>
                            </ul>

                            <h2>
                                <Shimmer width="150" />
                            </h2>

                            <ul>
                                <li className="list-disc ml-5 mb-4">
                                    <Shimmer width="400" />
                                </li>
                                <li className="list-disc ml-5 mb-4">
                                    <Shimmer width="400" />
                                </li>
                                <li className="list-disc ml-5 mb-4">
                                    <Shimmer width="400" />
                                </li>
                            </ul>
                        </>
                    )}
                </Container>
            </Stack>
        </>
    );
};

const GroupAvailability = (props: { group: Group }) => {
    const placesRemaining = props.group.places - props.group.attending;
    let backgroundClass = 'bg-green-600';
    let label = `${placesRemaining} space${placesRemaining > 1 ? 's' : ''}`;

    if (placesRemaining <= 0) {
        backgroundClass = 'bg-red-600';
        label = 'Full';
    } else if (placesRemaining <= 2) {
        backgroundClass = 'bg-yellow-600';
    }

    return <span className={classNames('rounded-sm text-white font-bold text-sm px-2', backgroundClass)}>{label}</span>;
};
