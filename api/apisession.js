import axios from "axios"

export default class APISession {
    constructor(domain, username, password) {
        this.domain = domain
        this.username = username
        this.password = password
    }

    authentificate() {
        return new Promise((resolve, reject) => {
            const datas = {
                username: this.username, 
                password: this.password
            }
            return axios.post(`${this.domain}/api/authentificate`, datas)
                .then(req => resolve(req.data))
                .catch(req => reject(req))
        })
    }

    register(sex, sportFrequency, goal, weight, email) {
        return new Promise((resolve, reject) => {
            const datas = {
                username: this.username, 
                password: this.password,
                sportfrequency: sportFrequency,
                sex,
                goal,
                weight,
                email
            }
            
            return axios.post(`${this.domain}/api/register`, datas)
                .then(req => resolve(req.data))
                .catch(req => reject(req))
        })
    }
}