import { ConfigContext } from '../core/providers/Config';
import { Container } from './Container';
import React from 'react';
import { Stack } from './Stack';

export const SessionsList = () => (
    <>
        <ConfigContext.Consumer>
            {({ sessions }) =>
                sessions && (
                    <>
                        <Stack backgroundColour="light">
                            <Container>
                                <h1>Upcoming training sessions</h1>

                                <pre>{JSON.stringify(sessions, null, 4)}</pre>
                            </Container>
                        </Stack>
                    </>
                )
            }
        </ConfigContext.Consumer>
    </>
);
