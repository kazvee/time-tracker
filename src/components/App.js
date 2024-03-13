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
      showStats: false,
    };
  }

  changeDate() {
    console.log(`⌚ ${this.state.newDate}`);
    this.setState({
      date: this.state.newDate,
      showStats: true,
    });
  }

  render() {
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
              >
                Submit
              </Button>
            </div>
          </div>
          {this.state.showStats ? <Stats date={this.state.date} /> : null}
        </Form>
      </div>
    );
  }
}

export default App;
