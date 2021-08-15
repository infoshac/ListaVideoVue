<template>
    <main>
        <div class="text-top">Video Novos toda<b>QUINTA</b> as <b>20h</b></div>
        <a href="https://youtube.com/wdevoficial" target="blank">
            <img alt="Inscreva" id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg">
        </a>  
        <div class="text-buttom">youtube.com/wdevoficial</div>
    </main>
</template>

<script>


export default ({
name:'Home'
})
</script>

<style  scoped>
    main{
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }
    .text-top{
        color: blanchedalmond;
        font-size: 22px;
        margin-bottom: 22px;
        }
    .text-buttom{
        color: blanchedalmond;
        font-size: 18px;
        margin-top: 20px;
        }
    #subscribe{
        width: 340px;
    }
    @media(min-width: 700px){
     #subscribe{
        width: 370px;
    }   
    }
</style>
