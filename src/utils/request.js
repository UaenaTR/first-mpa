import Vue from 'vue'
import axios from 'axios'

const _this = new Vue()

export default {
    async get(url,data){
        try {
            const result = await axios({
                method: 'get',
                url,
                params:data
            })
            if(result.data.success == 0){
                const toast = _this.$createToast({
                    time: 1000,
                    txt: result.data.msg,
                    type: 'text'
                })
                toast.show() 
            }
            return result.data
        } catch (e) {
            console.log(e)
        }
    },

    async post(url,data){
        try {
            const result = await axios({
                method: 'post',
                url,
                data
            })
            if(result.data.success == 0){
                const toast = _this.$createToast({
                    time: 1000,
                    txt: result.data.msg,
                    type: 'text'
                })
                toast.show() 
            }
            return result.data
        } catch (e) {
            console.log(e)
        }
    }
}