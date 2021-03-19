import React, { useState } from 'react';

import Button from './buttons/Button';
import Container from './Container';
import Dialog from './Dialog';
import Stack from './Stack';

export default class Announcement extends React.Component {
    state: {
        closed: boolean;
    };

    constructor(props) {
        super(props);

        this.state = {
            closed: false,
        };

        this.onReadMoreClick = this.onReadMoreClick.bind(this);
    }

    onReadMoreClick() {
        this.setState({});
    }

    render() {
        return (
            <>
                <div className={this.state.closed ? 'hidden' : undefined}>
                    <Stack backgroundColour="bright" padding="sm">
                        <Container>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="bg-primary-600 p-1 rounded-lg">
                                        <i className="fas fa-bullhorn fa-lg"></i>
                                    </div>

                                    <div className="ml-3 h2 font-bold text-lg">
                                        Announcement {JSON.stringify(this.state)}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <Button link="/" title="Read more" size="sm" open={this.readMore}></Button>

                                    <a href="#" onClick={() => this.close()}>
                                        <i className="fas fa-times-circle fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </Container>
                    </Stack>
                </div>

                <Dialog title="Announcement"></Dialog>
            </>
        );
    }

    getCloseSetting(): boolean {
        const status = localStorage.getItem('bpj.announcement');

        return Boolean(status);
    }

    close(): void {
        this.setState({
            closed: true,
        });

        localStorage.setItem('bpj.announcement', 'true');
    }

    readMore(): void {}

    componentDidMount(): void {}
}
