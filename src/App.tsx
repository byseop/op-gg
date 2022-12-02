import { Provider } from 'react-redux';
import { persistor, store } from '@core/reducers';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@styles/globalStyles';
import MainRoutes from '@pages/routes';
import { ReactQueryDevtools } from 'react-query/devtools';

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
            <MainRoutes />
            <GlobalStyle />
          </BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
