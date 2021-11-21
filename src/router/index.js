import Vue from "vue";
import Router from 'vue-router';
import Calculator from '../components/Calculator/Index.vue'
import Product from '../components/Product/Index.vue'
import Index from '../components/Index.vue'
Vue.use(Router);


export default new Router({
    routes: [
        {
            path:'/',
            name:'Index',
            component:Index
        },
        {
            path:'/cal',
            name:'Calculator',
            component:Calculator
        },
        {
            path:'/product',
            name:'Product',
            component:Product
        }
    ]
})