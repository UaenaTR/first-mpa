export default [
    {
        path: '/pageOne.html',
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