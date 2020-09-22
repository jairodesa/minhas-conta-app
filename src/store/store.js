import Vuex from 'vuex'
import Vue from 'vue'

import http from '@/http'

Vue.use(Vuex)

const state = {
    token: null,
    user: {},
    listDebts: [],
    debts: {},
}
const getters = {
    userStateLogin: state => Boolean(state.token),
    usestate: state => state.user,
    listDebtsState: state => state.listDebts,
    debtsState: state => state.debts
}
const mutations = {
    DEFINE_USER_LOGIN(state, { token, user }) {
        state.token = token
        state.user = user
    },
    LOGOUT_USER(state) {
        state.token = null
        state.user = {}
    },
    DEFINE_LIST_DEBTS(state, { listDebts, debts }) {
        state.listDebts = listDebts
        state.debts = debts
    },
}
const actions = {
    enterLogin({ commit }, user) {
        return new Promise((resolve, reject) => {
            http.post('user/login', user)
                .then(response => {
                    commit('DEFINE_USER_LOGIN', {
                        token: response.data.accessToken,
                        user: response.data.user
                    })
                    localStorage.setItem("minhas-contas", JSON.stringify(response.data))
                    resolve(response.data)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    },
    listDebits({ commit }, debis) {

        return new Promise((resolve, reject) => {
            http.get(`api/account/findById/${debis.id}/${debis.iditem}`)
                .then(response => {
                    commit('DEFINE_LIST_DEBTS', {
                        listDebts: response.data.listDebts,
                        debts: response.data,
                    })
                    resolve(response.data)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }
}
export default new Vuex.Store({
    state: state,
    mutations,
    actions,
    getters
})