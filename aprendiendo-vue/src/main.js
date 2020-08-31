import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';


Vue.config.productionTip = false

//Con esto cargas el Vue-router dentro de Vue
Vue.use(VueRouter);

//Definimos nuestras rutas
const routes = [
  {path: '/home', component: LastArticles},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/formulario', component: Formulario},
  {path: '/pagina/:id?', name: 'pagina', component: Pagina},
  {path: '/mi-componente', component: MiComponente},
  {path: '/', component: LastArticles},
  {path: '*', component: ErrorComponent},
  {path: '/peliculas', name:'peliculas', component: Peliculas}
];

//Instanciamos las Rutas
const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
