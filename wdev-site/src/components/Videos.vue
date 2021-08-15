<template>
   <main>
        <section class="container">
            <h1>Videos</h1>
            <section class="videos">
                <div class="video" v-for="(LinkVideo, index) in LinkVideos" :key="index" >
                <a  :href="LinkVideo.link" target="blank">
                   
                   
                    <img alt="LinkVideo.title" :src="LinkVideo.thumb" >
                    <div class="video-title"><b>{{LinkVideo.title}}</b></div>
                </a>
                </div>
            </section>
        </section>
   </main>
</template>

<script>
import api from '@/services/api.js'
export default {
    name:'Videos',
    data(){
        return{
            LinkVideos:[]
        }
    },
    mounted(){
        api.get('/videos.json').then(resource =>{
            this.LinkVideos= resource.data;
        })
    }
}
</script>
<style  scoped>
#main{
    width: 100%;
      height: calc(100vh - 120px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

}
main{
    align-items: center;
}
.video img{
    width: 100%;
}
.videos{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.video{
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 40px;
}
.video a{
    color:var(--color-text-dark);
    font-weight: 600;
    text-align: center;
}
@media(min-width: 700px){
     .videos{
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .video{
        margin-right: 30px;
        width: 300px;
    }   
    }
</style>
