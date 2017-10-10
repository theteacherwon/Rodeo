import axios from "axios"

const baseUrl = `http://localhost:3000/api/rodeo`
export function getAllEvents() { 
    return axios.get(`http://eventful.com/json/events/?q=rodeo&app_key=nMJzcGm845V9hpCg`)
}