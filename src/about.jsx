import { render } from 'preact';
import AppLayout from './components/AppLayout';

const App = () => (
  <AppLayout>
    <h1>About</h1>
    <p>Goals of this website is to demonstrate:</p>
    <ul>
      <li>Building a simple MPA (Multi Page Application)</li>
      <li>Using Vite</li>
      <li>Using Preact</li>
    </ul>
  </AppLayout>
);

render(<App />, document.body);
