import React from 'react'

import Count from './Count';

import styled from 'styled-components'

export interface Props {
}

export interface State {
    count: number;
}

export default class Counter extends React.Component<
    Props,
    State
    > {

    state: State = {
        count: 0
    };

    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        });
    };

    decrement = () => {
        this.setState({
            count: (this.state.count - 1)
        });
    };



    public render() {
        return <div>
            <Count count={this.state.count} />
            <Button onClick={this.increment}>Incrementar</Button>
            <button onClick={this.decrement}> Decrementar</button>
            {this.state.count}
        </div>;

    }
}


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
