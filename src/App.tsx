import { Provider } from 'react-redux';
import { persistor, store } from '@core/reducers';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App" />
      </PersistGate>
    </Provider>
  );
}

export default App;
