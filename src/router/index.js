import Vue from 'vue'
import VueRouter from 'vue-router'

import Accounts from '../view/Account/Accounts.vue'
import AccountDebts from '../view/Account/AccountDebts.vue'
import Login from '../view/auth/Login.vue'
import store from '../store/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'accounts',
        component: Accounts
    },
    {
        path: '/accountdebts',
        name: 'accountDebts',
        component: AccountDebts
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            publica: true
        }

    }
]
const router = new VueRouter({
    mode: "history",
    routes
})
router.beforeEach((routeTo, routeFrom, next) => {
    if (!routeTo.meta.publica && !store.state.token) {
        return next({
            path: '/login'
        });
    }
    next();
})
export default router