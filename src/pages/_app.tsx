import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { setUserCredentials } from '../redux/slices/userSlice';
import { RootState } from '../redux/store';
import store from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const storedCredentials = sessionStorage.getItem('userCredentials');
    if (storedCredentials) {
      const credentials: RootState['user']['credentials'] = JSON.parse(storedCredentials);
      store.dispatch(setUserCredentials(credentials));
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
