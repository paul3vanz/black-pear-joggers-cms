import React, { useContext } from 'react';
import { friendlyDate, friendlyTime } from '../core/helpers';

import { ConfigContext } from '../core/providers/Config';
import { Container } from './Container';
import { Group } from '../core/models/group.model';
import { Stack } from './Stack';
import moment from 'moment-mini';

export const SessionsList = () => {
    const sessions: Group[] = useContext(ConfigContext).sessions;

    let upcomingSortedGroups;
    let dates;

    if (sessions) {
        upcomingSortedGroups = sessions.filter((session) =>
            moment(session.date, 'YYYY-MM-DD').startOf('day').isSameOrAfter(moment().startOf('day'))
        );

        console.log(upcomingSortedGroups);

        dates = Array.from(new Set(upcomingSortedGroups.map((session) => session.date)));
    }

    return (
        <>
            {upcomingSortedGroups && (
                <>
                    <Stack backgroundColour="light">
                        <Container>
                            <h1>Upcoming training sessions</h1>

                            {dates.map((date) => (
                                <>
                                    <h2>{friendlyDate(date)}</h2>

                                    <ul>
                                        {upcomingSortedGroups
                                            .filter((group) => group.date === date)
                                            .map((group) => (
                                                <li className="list-disc ml-5 mb-4" key={group.id}>
                                                    {friendlyTime(group.time)} <strong>{group.title}</strong> with{' '}
                                                    {group.leader}{' '}
                                                    <span className="text-gray-500"> from {group.location}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </>
                            ))}
                        </Container>
                    </Stack>
                </>
            )}
        </>
    );
};
