import axios from './api'

const AuthService = {
    async userRegister(user) {
        const res = await axios.post('/users', {user})
        return res.data;
    },
    async userLogin(user) {
        const res = await axios.post('/users/login', {user})
        return res.data;
    },
    async getUser() {
        const {data} = await axios.get('/user');
        return data;
    }
}

export default AuthService;