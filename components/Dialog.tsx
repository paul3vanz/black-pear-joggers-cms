import React from 'react';
import classNames from 'classnames';

interface Props {
    title: string;
    open: boolean;
}

interface State {
    open: boolean;
}

export default class Dialog extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className={classNames()}>
                    <h2 className="text-2xl font-bold">{this.props.title}</h2>
                    <div>{JSON.stringify(this.props)}</div>
                </div>
            </>
        );
    }
}
