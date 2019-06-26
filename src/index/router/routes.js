
import ComOne from '../../components/ComOne.vue'

export default [
    {
        path: '/',
        redirect: '/index.html',
    },
    {
        path: '/index.html',
        name: 'ComOne',
        component: ComOne
    }
]