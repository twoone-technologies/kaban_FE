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
    // editRealtor
    static editRealtor(id: string) {
        return `realtors/:${id}`
    }
}