import { Provider } from 'react-redux';
import { persistor, store } from '@core/reducers';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@styles/globalStyles';
import MainContainer from './MainContainr';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
      // onError: handlerError
      // suspense: true
    },
    mutations: {
      // onError: handlerError
    }
  }
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <MainContainer />
            <GlobalStyle />
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
