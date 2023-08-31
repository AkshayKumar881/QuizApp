import '../styles/styles.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Provider } from 'react-redux';
import store from '../store/store';

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={router.pathname}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div className="page">
            <Component {...pageProps} />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Provider>
  );
}

export default MyApp;
