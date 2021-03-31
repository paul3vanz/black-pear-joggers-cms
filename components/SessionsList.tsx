import React, { useContext } from 'react';
import { classNames, friendlyDate, friendlyTime } from '../core/helpers';

import { Container } from './Container';
import { Group } from '../core/models/group.model';
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
                                <div key={date}>
                                    <h2>{friendlyDate(date)}</h2>

                                    <ul>
                                        {upcomingSortedGroups
                                            .filter((group) => group.date === date)
                                            .sort((a, b) => {
                                                console.log(a.time, b.time);

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
                        </Container>
                    </Stack>
                </>
            )}
        </>
    );
};

const GroupAvailability = (props: { group: Group }) => {
    const isFull = !placesRemaining(props.group);

    const backgroundClass = isFull ? 'bg-red-600' : 'bg-green-600';

    return (
        <span className={classNames('rounded-md text-white font-bold text-sm px-2', backgroundClass)}>
            {isFull ? 'Full' : 'Spaces'}
        </span>
    );
};

function placesRemaining(group: Group): boolean {
    return group.places - group.attending > 0;
}
