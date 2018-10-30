<template>
    <div class="main">
        <header>
           <img src="../../assets/sousuo.png" alt="">
            <router-link to="/home/recom" tag="span">推荐</router-link>
            <router-link to="/home/beijing" tag="span">北京</router-link>
           <img src="../../assets/gengduo.png" alt="">
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.main{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
header{
    height: 44px;
    line-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #eee;
}
img{
    width: 20px;
    height: 20px;
}
.router-link-active{
  color: #fff;
}
</style>