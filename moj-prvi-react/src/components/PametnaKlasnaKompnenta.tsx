import React, { Component } from 'react'

type Props = { message: string }

type State = { count: number }

export default class PametnaKlasnaKompnenta extends Component<Props,State> {
    state = { count: 0 };
    render() {
      return (
        <div onClick={() => this.increment(1)}>
          {this.props.message} {this.state.count}
        </div>
      );
    }
    increment = (amt: number) => {
      // like this
      this.setState((state) => ({
        count: state.count + amt,
      }));
    };
}