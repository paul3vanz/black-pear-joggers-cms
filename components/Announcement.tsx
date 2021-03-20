import { faBullhorn, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Button from './buttons/Button';
import Container from './Container';
import { Dialog } from './Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Stack from './Stack';

export default class Announcement extends React.Component {
    state: {
        dismissed: boolean;
        open: boolean;
    };

    constructor(props) {
        super(props);

        this.state = {
            dismissed: false,
            open: false,
        };

        this.onReadMoreClick = this.onReadMoreClick.bind(this);
    }

    onReadMoreClick() {
        this.setState({
            open: true,
        });
    }

    render() {
        return null;

        if (this.state.dismissed) {
            return null;
        }

        return (
            <>
                <div className={this.state.dismissed && 'hidden'}>
                    <Stack backgroundColour="bright" padding="sm">
                        <Container>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="bg-primary-600 p-1 rounded-lg">
                                        <FontAwesomeIcon icon={faBullhorn} size="lg" />
                                    </div>

                                    <div className="ml-3 h2 font-bold text-lg">
                                        Announcement {JSON.stringify(this.state)}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <Button
                                        link="#"
                                        title="Read more"
                                        size="sm"
                                        onClick={() => this.onReadMoreClick()}></Button>

                                    <a className="ml-4" href="#" onClick={() => this.dismiss()}>
                                        <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                                    </a>
                                </div>
                            </div>
                        </Container>
                    </Stack>
                </div>

                <Dialog title="Announcement" open={this.state.open} onClose={this.setState({ open: false })}></Dialog>

                <style jsx>{``}</style>
            </>
        );
    }

    getCloseSetting(): boolean {
        // const status = localStorage.getItem('bpj.announcement');

        return Boolean(status);
    }

    dismiss(): void {
        this.setState({
            dismissed: true,
        });

        // localStorage.setItem('bpj.announcement', 'true');
    }

    componentDidMount(): void {}
}
