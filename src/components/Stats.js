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

    let timeString = '';

    if (years > 0) {
      timeString += `${years} ${years === 1 ? 'year' : 'years'}, `;
    }
    if (months > 0) {
      timeString += `${months} ${months === 1 ? 'month' : 'months'}, `;
    }
    if (days > 0) {
      timeString += `${days} ${days === 1 ? 'day' : 'days'}`;
    }

    return timeString;
  }

  render() {
    return (
      <div>
        <h2>
          There are {this.timeSince(this.props.date)} between now and{' '}
          {this.props.date}
        </h2>
        <img src={calendarIcon} alt='calendar' />
      </div>
    );
  }
}

export default Stats;
