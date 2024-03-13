import { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './App.css';

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
        <Form inline>
          <h2>Input a Date</h2>
          <FormControl
            type='date'
            onChange={(event) => this.setState({ newDate: event.target.value })}
          ></FormControl>
          <Button onClick={() => this.changeDate()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
