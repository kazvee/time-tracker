import { Component } from 'react';
import calendarIcon from '../assets/calendar.svg';

class Stats extends Component {
  timeSince(date) {
    let today = new Date().getTime();
    let otherDate = new Date(date).getTime();
    let difference = Math.abs(today - otherDate);

    let days = Math.floor(difference / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;

    let months = Math.floor(days / 31);
    days -= months * 31;

    return `${years} years, ${months} months, ${days} days`;
  }

  render() {
    return (
      <div>
        <h2>
          It has been {this.timeSince(this.props.date)} since {this.props.date}
        </h2>
        <img src={calendarIcon} alt='calendar' />
      </div>
    );
  }
}

export default Stats;
