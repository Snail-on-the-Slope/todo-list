import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast";
import OrderList from 'primevue/orderlist';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false
Vue.use(PrimeVue);
Vue.use(ToastService);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Toast', Toast);
Vue.component('OrderList', OrderList);

new Vue({
    store,
    render: function(h) { return h(App) }
}).$mount('#app')
