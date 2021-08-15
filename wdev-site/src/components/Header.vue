<template>
    <header>
        <nav class="container">
            <a href="/"> <img alt="WDEV" id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg
"></a>
        <!--v-on semelhante o onclick ele chama a açao-->
         <img v-on:click="openMenu" alt="Abrir menu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg
">
        </nav>
        <div id="menu-overlay" v-on:click="closeMenu"  v-if="menuActive">

        </div>

        <!--Qunado se coloca : vc diz ao vue que ira utlizar uma funcao javascript-->
        <div id="menu-items" :class="{active:menuActive}" >
             <a href="/"> <img alt="WDEV" id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg
"></a>
            <ul>
                <li  v-on:click="closeMenu" ><router-link to="/">Home </router-link></li>
                <li  v-on:click="closeMenu" ><router-link to="/videos">Video </router-link></li>
                <li  v-on:click="closeMenu" ><router-link to="/sobre">Sobre </router-link></li>
                <li  v-on:click="closeMenu" ><router-link to="/contato">Contato </router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    //funcao para menu sumir ou aparecer
    data(){
        return{
            menuActive:false
        }
    },
    //metodos serve para criar um objeto e passar uma funcao atraves dele
    methods:{
        openMenu: function(){
            this.menuActive= true;
        },
       closeMenu: function(){
            this.menuActive= false;
        } 
    }
    }
</script>

<style scoped>
header{
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo{
  width: 100px;
}
#menu-logo{
  width: 90px;
  margin-top: 30px;
  margin-bottom: 10px;
}
#menu-button{
  width: 30px;
}

nav{
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
}
#menu-overlay{
    position: fixed;
    top: 0%;
    left: 0%;
    width:40%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
}
#menu-items{
    position: fixed;
    top: 0;
    right: 0%;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

}
#menu-items.active{
    display: flex;
}
ul{
    list-style: none;
    text-align: center;
}
ul li a{
    color: var(--color-text-light);
}
li{
    margin: 20px 0px;
}
@media(min-width: 700px){
    #menu-button,
    #menu-logo,
    #menu-overlay{
        display: none;
    }
    #menu-items{
        display: flex;
        position: static;
        height: 60px;
        width: auto;
    }
    ul{
        display: flex;
        height: 60px;
        align-items: center;
    }
    ul li{
        margin: 0;
        margin-left: 20px;
    }
}


</style>