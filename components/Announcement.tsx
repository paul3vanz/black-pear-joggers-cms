import React, { MouseEventHandler } from 'react';
import { faBullhorn, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Button } from './buttons/Button';
import Container from './Container';
import { Dialog } from './Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stack from './Stack';
import moment from 'moment-mini';

interface Props {
    id: string;
    timestamp: string;
    title: string;
    link: string;
}

interface State {
    dismissed: boolean;
    show: boolean;
    readMore: boolean;
}

export default class Announcement extends React.Component {
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            dismissed: false,
            show: false,
            readMore: false,
        };

        this.onReadMoreClick = this.onReadMoreClick.bind(this);
    }

    onReadMoreClick(e: React.MouseEvent) {
        e.preventDefault();

        this.setState({
            readMore: true,
        });
    }

    render() {
        // const debug = <pre>{JSON.stringify(this.state)}</pre>;

        if (!this.state.show || this.state.dismissed) {
            return null;
        }

        return (
            <>
                {/* <pre>Debug: {debug}</pre> */}
                <Stack backgroundColour="bright" padding="sm">
                    <Container>
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="flex items-center mb-4 sm:mb-0">
                                <div className="bg-primary-600 p-1 rounded-lg">
                                    <FontAwesomeIcon icon={faBullhorn} size="lg" />
                                </div>

                                <div className="ml-3 h2 font-bold text-lg" title={JSON.stringify(this.state)}>
                                    <a href="#" onClick={this.onReadMoreClick} className="underline">
                                        Groups now available to book
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full sm:w-auto">
                                <Button link="#" text="Read more" size="sm" onClick={this.onReadMoreClick}></Button>

                                <a className="ml-4" href="#" onClick={() => this.dismiss()}>
                                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                                    <span className="sr-only">Hide announcement</span>
                                </a>
                            </div>
                        </div>
                    </Container>
                </Stack>

                {this.state.readMore && (
                    <Dialog title="Groups now available to book" onClose={() => this.setState({ readMore: false })}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit vestibulum euismod. Sed
                            eleifend, orci venenatis consectetur facilisis, erat urna scelerisque leo, in cursus orci
                            diam sit amet leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Proin fringilla pellentesque ante, vitae maximus velit posuere in. Mauris ac
                            velit nunc. Nulla vehicula vel tellus in ultricies. Nam fermentum elementum felis vitae
                            commodo.
                        </p>

                        <Button text="Continue reading" link="#"></Button>
                    </Dialog>
                )}
            </>
        );
    }

    dismiss(): void {
        this.setState({
            dismissed: true,
        });

        localStorage.setItem('bpj.announcement', moment().toISOString());
    }

    componentDidMount(): void {
        this.setState({
            dismissed: false,
        });

        const lastDismissed = this.getLastDismissed();

        if (!lastDismissed || moment(lastDismissed).isBefore(moment())) {
            this.setState({
                show: true,
            });
        }
    }

    getLastDismissed(): string {
        try {
            return localStorage.getItem('bpj.announcement');
        } catch (e) {}
    }
}
