import { render } from 'preact';
import AppLayout from './components/AppLayout';
import { load } from './utils';

const Item = ({ val }) => (
  <article>
    <h2>{val.title}</h2>
    <p class="article-info">
      {val.date}
      <a href={'/article/?id=' + val.id}>read</a>
    </p>
  </article>
);

const List = ({ items = [] }) => {
  const rs =
    items.length > 0 && items.map((v) => <Item key={v.id} val={v} />);

  if (!rs) {
    return <p> no data </p>;
  }

  return rs;
};

const App = ({ data, error }) => (
  <AppLayout>
    <h1>Blog</h1>
    {!error && <List items={data} />}
    {error && <p>Something wrong happen</p>}
  </AppLayout>
);

const preactStart = (data = [], error = false) =>
  render(<App data={data} error={error} />, document.body);

load(preactStart);
