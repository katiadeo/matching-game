import './styles.scss';
import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('root');

  if (!appElement) throw Error('App root element not found');
  new App(appElement).start();
};

// STREAM of JEGIUS
// import { App } from './app/app';
// import { CounterServiceImplementation } from './app/counter.service';
// const counterService = new CounterServiceImplementation
// const application = document.querySelector('#root');

// new App(application).render();
