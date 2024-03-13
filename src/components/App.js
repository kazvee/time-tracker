import { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './App.css';
import Stats from './Stats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      date: '2000-01-01',
    };
  }

  changeDate() {
    console.log(`⌚ ${this.state.newDate}`);
    this.setState({ date: this.state.newDate });
  }

  render() {
    return (
      <div className='App'>
        <Form>
          <div className='input-container'>
            <h2>Input a Date</h2>
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
              >
                Submit
              </Button>
            </div>
          </div>
          <Stats date={this.state.date} />
        </Form>
      </div>
    );
  }
}

export default App;
