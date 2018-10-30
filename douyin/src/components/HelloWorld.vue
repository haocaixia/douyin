<template>
  <div class="wrap">
    <main>
      <router-view></router-view>
    </main>
    
    <footer>
      <router-link to="/home" tag="span">首页</router-link>
      <router-link to="/recom" tag="span">关注</router-link>
      <router-link to="/message" tag="span">消息</router-link>
      <router-link to="/my" tag="span">我</router-link>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>


<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
main{
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
footer{
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #fff

}
footer span{
  flex: 1;
  text-align: center;
}
.router-link-active{
  border-bottom:  solid 2px#ff0;
}
</style>
