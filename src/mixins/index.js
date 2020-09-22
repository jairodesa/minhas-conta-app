export const logoutMixin = {
    methods: {
        enterLogout() {
            this.$store.commit('LOGOUT_USER')
            this.$router.push({ name: 'login' })
        },
    }
}
