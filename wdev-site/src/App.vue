<template>
  <div id="app">
    <!--paginas inseridas ou componentes na pagina do app-->
    <Header/>
    <!--Forma de chamar os componentes que sao definidos na rota neste caso router
    Dessa forma eu nao preciso criar componentes aqui ou passar de forma manual de maneira que ele estará no router
    -->
    <router-view path="$router.key"/>
    <Footer/>
  </div>
</template>

<script>
//importa os componentes que serao chamados na div app
import './style/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: 'App',
  //define os componentes
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
