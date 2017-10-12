/**
 * Created by wb-wj270693 on 2017/10/9.
 */

import App from '../App.vue';
/*import home from '../pages/home/index.vue'
import item from '../pages/item/index.vue'
import score from '../pages/score/index.vue'*/
export default [
    {
        path:'/',
        component:App,
        children:[
            {
                path:'/',
                // component: resolve => require(['../pages/home'], resolve),
                component: ()=>import('../pages/home'),
                // component:home,
                name:'home'
            },{
                path:'/item',
                // component: resolve => require(['../pages/item'], resolve),
                component: ()=>import('../pages/item'),
                // component:item,
                name:'item',
            },{
                path:'/score',
                // component: resolve => require(['../pages/score'], resolve),
                component: ()=>import('../pages/score'),
                // component:score,
                name:'score',
            }
        ]
    }
]

