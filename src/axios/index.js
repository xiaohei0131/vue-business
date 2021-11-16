import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create({
    baseURL:'/api',
    timeout: 5000
})

let progressInterval = -1
let percentage = 0

function initProgress() {
    document.querySelector(".axiosProgress").style.display = 'none'
}

function setProgress(){
    document.querySelector(".axiosProgress .el-progress-bar__inner").getElementsByClassName.width = percentage + '%'
}

function endProgress(){
    clearInterval(progressInterval)
    progressInterval = -1
    initProgress()
}

instance.interceptors.request.use(
    config => {
        if(progressInterval > -1){
            endProgress()
        }

        progressInterval = setInterval(() => {
            if (percentage === 0){
                document.querySelector('.axiosProgress').style.display = 'inline'
            }
            if (percentage < 50){
                percentage += 20 * Math.random()
            }else if (percentage < 70){
                percentage += 10 * Math.random()
            }else if (percentage < 90){
                percentage += 5 * Math.random()
            }else {
                percentage += Math.random()
            }

            if (percentage >= 100){
                percentage = 100
            }
        }, 20)

        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


instance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            let res = response.data
            if(res.status !== 0 && res.status !== '0'){
                Message.error({
                    showClose: true,
                    message: res.msg || '操作失败'
                })
            }
            endProgress()
            return res
        } else {
            Message.error({
                showClose: true,
                    message: '请求失败'
            })
            endProgress()
            return response
        }
    },
    error => {
        endProgress()
        return Promise.reject(error)
    }
)


instance.defaults.transformRequest = function(data){
    data = JSON.stringify(data)
    return data
}

export default instance
