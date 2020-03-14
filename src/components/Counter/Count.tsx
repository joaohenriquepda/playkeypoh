import React from 'react'

export interface Props {
    count: number;
}

export interface State {
}

export default class Count extends React.Component<
    Props,
    State
    > {
    public render() {
        return <div>{this.props.count}</div>;

    }
}