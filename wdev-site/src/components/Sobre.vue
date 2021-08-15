<template>
   <main>
       <div class="about" v-html="about"></div>
   </main>
</template>

<script>
import api from '@/services/api.js'
export default {
    name:'Sobre',
    data(){
        return{
            about:''
        }
    },
    mounted(){
        api.get('/about.json').then(resource =>{
            this.about= resource.data.about;
        })
    }
}
</script>
<style  scoped>

main{
    align-items: center;
}

</style>
