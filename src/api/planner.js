export default function (instance) {
    return {
        get_token(params) {
            return instance.post('api/token/', params)
        },
        refresh_token(token) {
            return instance.post('api/token/refresh/', token)
        },
    }
}
