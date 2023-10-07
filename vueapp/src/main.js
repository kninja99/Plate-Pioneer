import './assets/main.css';
import { createApp } from 'vue';
import router from '../router';
import App from './App.vue';

let app = '';
let containerSelector = '#app';

// check if app has been mounted already
const mountPoint = document.querySelector(containerSelector);

if (mountPoint && mountPoint.__vue_app__ !== undefined) {
  // Set the existing mount point to 'app'.
  app = mountPoint.__vue_app__._instance.proxy;
} else {
  // create a new app instance
  app = createApp(App);

  // Install the required instances like plugin, component and directive.
  app.use(router);

  // Mount 'app' (App.vue) as root component.
  app.mount(containerSelector);
}
