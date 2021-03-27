import { faBullhorn, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Button } from './buttons/Button';
import { ConfigContext } from '../core/providers/Config';
import { Container } from './Container';
import { Dialog } from './Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Stack } from './Stack';
import { blogPostUrl } from '../core/helpers';
import moment from 'moment-mini';

interface Props {
    id: string;
    timestamp: string;
    title: string;
    link: string;
}

interface State {
    dismissed: boolean;
    readMore: boolean;
}

export class Announcement extends React.Component {
    readonly DISMISSED_STORAGE_KEY = 'bpj.announcement.dismissed';

    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            dismissed: false,
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
        if (this.state.dismissed) {
            // return null;
        }

        return (
            <>
                <ConfigContext.Consumer>
                    {({ announcement }) =>
                        announcement && (
                            <>
                                <Stack backgroundColour="bright" padding="sm">
                                    <Container>
                                        <div className="flex flex-wrap justify-between items-center">
                                            <div className="flex items-center mb-4 sm:mb-0">
                                                <div className="bg-primary-600 p-1 rounded-lg w-8 h-8 overflow-hidden animate-pulse">
                                                    <FontAwesomeIcon icon={faBullhorn} size="lg" />
                                                </div>

                                                <div
                                                    className="ml-3 h2 font-bold text-lg"
                                                    title={JSON.stringify(this.state)}>
                                                    <a href="#" onClick={this.onReadMoreClick} className="underline">
                                                        {announcement.fields.title}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center w-full sm:w-auto">
                                                <Button
                                                    as="button"
                                                    text="Read more"
                                                    size="sm"
                                                    fullWidth={true}
                                                    onClick={this.onReadMoreClick}></Button>

                                                <button className="ml-4" onClick={() => this.dismiss()}>
                                                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />

                                                    <span className="sr-only">Hide announcement</span>
                                                </button>
                                            </div>
                                        </div>
                                    </Container>
                                </Stack>

                                {this.state.readMore && (
                                    <Dialog
                                        title={announcement.fields.title}
                                        onClose={() => this.setState({ readMore: false })}>
                                        <p>{announcement.fields.description}</p>

                                        <Button text="Continue reading" link={blogPostUrl(announcement)}></Button>
                                    </Dialog>
                                )}
                            </>
                        )
                    }
                </ConfigContext.Consumer>
            </>
        );
    }

    dismiss(): void {
        this.setState({
            dismissed: true,
        });

        localStorage.setItem(this.DISMISSED_STORAGE_KEY, moment().toISOString());
    }

    componentDidMount(): void {
        // console.log('did mount');

        const lastDismissed = this.getLastDismissed();

        // console.log(lastDismissed);

        // console.log(this.props);

        // if (lastDismissed && moment(lastDismissed, moment.ISO_8601).isAfter(moment())) {
        //     console.log('set dismissed');

        //     console.log('props', this.props);

        //     this.setState({
        //         dismissed: true,
        //     });
        // }
    }

    getLastDismissed(): string {
        try {
            return localStorage.getItem(this.DISMISSED_STORAGE_KEY);
        } catch (e) {}
    }
}
