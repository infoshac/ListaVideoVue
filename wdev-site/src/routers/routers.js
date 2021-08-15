//o routrs serve para cuidar de todas as rotas do projeto através do vue-router
/** atraves do router eu defino aqui dentro a pagina ou componente e automaticamente ele será passado  */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
//é onde defino as rotas por componete
//aqui importa o componente
import Home from '@/components/Home'
import Videos from '@/components/Videos'
import Sobre from '@/components/Sobre'
import Contato from '@/components/Contato'
const routes=[
    //aqui vinculo o caminho com o componente que sera apresentado
    {
        path:'/',
        component:Home

    },
    {
        path:'/videos',
        component:Videos
    },
    {
        path:'/sobre',
        component:Sobre
    },
    {
        path:'/contato',
        component:Contato
    }


];
const router= new VueRouter({
    routes,
    mode:'history'
});
export default router;
//module.exports= Vue;