export default [
    {
        path: '/',
        name: 'ComOne',
        component: () => import('../../components/ComOne.vue'),
        children:[
            {
                path: '/Home',
                name: 'Home',
                component: () => import('../../components/Home.vue')
            }
        ]
    }
]