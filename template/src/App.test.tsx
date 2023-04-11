import { render } from '@testing-library/react';
import App from './App';

it('match app snapshot', async () => {
  const el = render(<App />);
  expect(el.container).toMatchSnapshot('app');
});
