export default class APIEndpoints {
    // AUTHENTICATION
    static get signup() {
        return '/auth/signup'
    }
    static get signin() {
        return '/auth/login'
    }
    static get refresh() {
        return '/auth/refresh'
    }
}