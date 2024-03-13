import { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Form inline>
          <h2>Input a Date</h2>
          <FormControl type='date'></FormControl>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
