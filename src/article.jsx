import { render } from 'preact';
import AppLayout from './components/AppLayout';
import { load } from './utils';

const Article = ({ title, content = [], date }) => (
  <>
    <h1>{title}</h1>
    <p>{date}</p>

    {content.map((v, index) => (
      <p key={index}>{v}</p>
    ))}
  </>
);

const App = ({ item }) => (
  <AppLayout>
    <Article
      title={item.title}
      content={item.content}
      year={item.year}
      month={item.month}
    />
  </AppLayout>
);

const preactStart = (data = []) =>
  render(<App item={data} />, document.body);

load(preactStart, false);
