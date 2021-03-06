import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../store';
import PageLayout from '../PageLayout';

it('PageLayout matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <PageLayout>
        <div>Page layout children</div>
      </PageLayout>
    </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
