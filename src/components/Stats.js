import { Component } from 'react';

class Stats extends Component {
  timeSince(date) {
    let today = new Date().getTime();
    let otherDate = new Date(date).getTime();
    let difference = Math.abs(today - otherDate);

    return `${difference} milliseconds`;
  }

  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        <h4>It has been {this.timeSince(this.props.date)}</h4>
      </div>
    );
  }
}

export default Stats;
