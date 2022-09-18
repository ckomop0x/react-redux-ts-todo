import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store, { STORE_NAME } from './store';

import App from 'components/App';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import saveState from 'utils/store/saveState';

store.subscribe(() => saveState(store.getState(), STORE_NAME));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
