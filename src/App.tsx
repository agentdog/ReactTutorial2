import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App () {
  const [alertVis, setAlertVis] = useState(false);

  const items = [
    "item 1",
    "banana 2",
    "potato 3"
  ]

  return <div>
    {alertVis && <Alert onClose={() => {setAlertVis(false)}}>An alert</Alert>}
    <Button onClickEvnt={() => setAlertVis(true)}>cool button</Button>
    <ListGroup items={items} heading="Nice label" onSelectItem={(item: string) => {
    console.log(item)
  }}/>
  </div>;
}

export default App