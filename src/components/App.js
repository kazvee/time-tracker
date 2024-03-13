import { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
import Stats from './Stats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      date: '2000-01-01',
      showStats: false,
    };
  }

  changeDate() {
    this.setState({
      date: this.state.newDate,
      showStats: true,
    });
  }

  render() {
    const { newDate, showStats } = this.state;
    const isDateSelected = newDate !== '';

    return (
      <div className='App'>
        <Form>
          <div className='input-container'>
            <h1>Input a Date</h1>
            <div className='input-group'>
              <FormControl
                type='date'
                onChange={(event) =>
                  this.setState({ newDate: event.target.value })
                }
              />
              <Button
                className='Button'
                variant='success'
                onClick={() => this.changeDate()}
                disabled={!isDateSelected}
              >
                Submit
              </Button>
            </div>
          </div>
          {showStats && (
            <div className='fade date-stats'>
              <Stats date={this.state.date} />
            </div>
          )}
        </Form>
        <Footer />
      </div>
    );
  }
}

export default App;
