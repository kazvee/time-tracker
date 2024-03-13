import { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Form inline>
          <FormControl type='date'>
          </FormControl>
          {' '}
          <Button>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
