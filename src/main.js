import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from './components/UI';
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

components.forEach((component) => {
    app.component(component.name, component);
});

app.use(VueLazyload);
app.use(router).mount('#app');
