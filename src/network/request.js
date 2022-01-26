import axios from "axios";

export let request = (address) => {
    return new Promise(resolve => {
        axios.get(`http://120.27.193.132:7070${address}`).then(res => {
            resolve(res.data.data);
        }).catch(e => {
            return e.message;
        })
    })
}

export let postRequest = (address, data) => {
    return new Promise(resolve => {
        axios.post(`http://120.27.193.132:7070${address}`, data).then(res => {
            resolve(res);
        }).catch(e => {
            console.log(e)
        })
    })
}