<template>
    <div class="content" @click="dbclick">
        <img src="../../assets/sc.png" alt="" :class="collect?'img1 active1':'img1'">
       
        <div v-for="(item,index) in shakesList" :key="index">
            <div class="con">
                  <h4>{{item.title}}</h4>
                 
                  <video :src="item.img" controls="true" class="video"></video>
                 
                    <span v-for="(value,key) in shakesList[index].commentList" :key="key" :class="key==ind?'barrage timer':'barrage'">{{value.content}}</span>
                    <div class="text">
                        <p>{{item.name}}</p>
                        <div>
                            {{item.content}}
                        </div>
                    </div>
            </div>
            <div class="bar">
                <p><img src="http://img0.imgtn.bdimg.com/it/u=3321483974,1109135402&fm=26&gp=0.jpg" alt=""></p>
                    <p><img src="../../assets/shoucang.png" alt=""><span>{{item.goods}}</span></p>
                    <p><img src="../../assets/xiaoxi.png" alt="" @click="alert(item.id)"><span>{{item.recom}}</span></p>
            </div>
            <Alert @close="close" :show="block" :getalertList="alertList"></Alert>
        </div>
        
    </div>
</template>

<script>
    import {mapState,mapActions,mapMutations} from 'vuex'
    import Alert from '../Alert.vue'
    export default {
        data(){
            return{
                isShow:false,
                block:false,
                collect:false,
                count:1,
                ind:0
            }
        },
        computed:{
            ...mapState({
                shakesList:state=>state.index.shakesList,
                 alertList:state=>state.index.alertList
            })
        },
        methods:{
           
            ...mapActions({
                getshakesList:'index/getshakesList',
                 getalertList:'index/getalertList',
            }),
            alert(id){
                this.block=true;
                this.getalertList(id)
            },
            close(hidden){
               this.block=false;
            },
            
            dbclick(){
                this.count++;
                if (this.count % 3==0) {
                   
                    this.collect=true;
                }else{
                    this.collect=false;
                }
               
                      
            }
        },
        mounted(){
            this.getshakesList();
            this.getalertList(0)
            setInterval(()=>{
              
                this.ind++;
                
                if(this.ind==this.alertList.length){
                    console.log(this.ind)
                    this.ind=0;
                    
                }
            },2000)
        

        },
        components:{
            Alert
        }

    }
    
</script>

<style scoped>

    .content{
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y:auto;
      color: #fff;
    }
    .img1{
        width: 40px;
        height: auto;
       position: absolute;
       left: 50%;
       top: 50%;
       transform: translate3d(-50%,-50%,0);
       transform: scale(0);
       transition: 2s;
       z-index: 99;
     
    }
    .active1{
         transform: scale(2);
        transition: 2s;
    }
    .content>div{
         width: 100%;
        height: 100%;
        position: relative;
    }
    .bar{
        width: 40px;
        position: absolute;
        right:0;
        top: 50%;
        transform: translateY(-50%)
    }
    .bar p img{
      width:20px;
      height: auto;
    
    }
    .bar p{
        padding: 5px 0;
        text-align: center;
    }
    .con{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .con h4{
        padding-top: 30%;
     width: 100%;
     text-align: center;
     line-height: 1.5;
     overflow: auto;
     
    }
    .con video{
        width: 100%;
        height: auto;
        margin-top: 10px;
        /* width: 100%;
        height: 200px; */
    }
    .bar img{
        width:30px;
        height: 30px;
        border-radius: 50%;
    }
    .bar p span{
        display: block;
        color: #fff;
        font-size: 12px;
        text-align: center;
    }
    .text{
        color: #fff;
        line-height: 1.5
    }
    .text>div{
        font-size: 12px;
        margin-top: 5px;
    }
    .video{
        position: relative;
    }
    .barrage{
        background: #fff;
        color: #000;
        border-radius: 10px;
        padding: 0 10px;
        position: absolute;
        left:-100%;
        top:30%;
       
    }
  .timer{
        animation:translateX 6s ease-out infinite;
  }
    @keyframes translateX{
        0%{ transform: translate3d(100%, 0, 0);}
        50%{transform: translate3d(300%,0px,0);}
        100%{transform: translate3d(0,0,0);}
    }
</style>