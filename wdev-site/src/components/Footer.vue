<template>
    <footer>
        <!--v-for é o forech do vue para varrer os valores da array 
        Neste caso pegamos o valor da array socialLinks de finida no script trazendo os valores da API e passamos
        para socialLink seus valores e definimos a index para receber o valor da chave unica
        -->
        <a class="socialLink" v-for="(socialLink,index) in socialLinks" :key="index" :href="socialLink.link" target="blank">
            <img :alt="socialLink.label" :title="socialLink.label" :src="socialLink.icon">
        </a>
    </footer>
</template>

<script>
import api from '@/services/api.js'
export default {
    name: 'Footer',
    data(){
        return{
            socialLinks:[]
        }
    },
    /* o monted é quando a pagina for montada dentro dele eu posso chamar objetos ou recurso no nosso caso eu vou chamar a api ; nao preciso chamar a url inteira basta apenas o api que é o service que criei e que importo acima com o import*/
    mounted(){
        api.get('/social-links.json').then(response =>{
            this.socialLinks= response.data;
        })
    }
}
</script>
<style scoped>
    footer{
        width: 100%;
        height: 60px;
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .socialLink{
        width: 40px;
        height: 40px;
        margin: 0 10px;
        border: 2px solid var(--color-text-light);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

    }
    .socialLink img{
        width: 20px;
    }

</style>
