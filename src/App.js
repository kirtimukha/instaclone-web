import { useReactiveVar } from '@apollo/client';
import {HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

        <Route path="/"
               element={<h1>Home</h1>}>
        </Route>
        <Route path="/potato"
              element={<h1>Potato</h1>}
        >
        </Route>
        <Route path="/banana"
              element={<h1>Banana</h1>}
        >
        </Route>
    </Router>
  );
}

export default App;
