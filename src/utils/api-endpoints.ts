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
    static realtor(id: string) {
        return `realtors/${id}`
    }
}