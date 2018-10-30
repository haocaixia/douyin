<template>
    <div  :class="show?'mark active':'mark'">
       
        <div class="title">
           <span></span>{{getalertList.length}}条评论<span class="close" @click="close"></span>
        </div>
   
        <div class="list">
            <dl v-for="(item,index) in getalertList" :key="index">
                <dt><img :src="item.personimg" alt=""></dt>
                <dd>
                    <p class="user">{{item.user}}</p>
                    <p class="tit">{{item.content}}</p>
                    <p class="time">{{item.time}}</p>
                </dd>
                <div class="asside" @click="add(index)">
                  <img src="../assets/shoucang.png" alt="">
                    <p class="numm">{{item.goods}}</p>
                </div>
            </dl>
        </div>
       
        <div class="send">
            <input type="text" value="msg" v-model="msg">
            <button @click="sendrecom(msg)">评论</button>
        </div>
    </div>
</template>

<script>
       import {mapState,mapActions,mapMutations} from 'vuex'

    export default {
        props:['show','getalertList'],
        data(){
            return{
                msg:''
            }
        },
        computed:{
            ...mapState({
               
            })
        },
        methods:{
            ...mapActions({
               
                getIndex:'index/getIndex',
                getpush:'index/getpush'
            }),
            close(){
                this.$emit('close',false)
            },
             
            add(index){
                this.getIndex(index)
            },
            sendrecom(msg){
                var year=new Date().getFullYear();
                var month=new Date().getMonth()+1;
                var day=new Date().getDate();
                var hour=new Date().getHours();
                var minu=new Date().getMinutes();
                var second=new Date().getSeconds();
                var date=year+'-'+month+'-'+day+' '+hour+':'+minu+':'+second
                var data={
                        "personimg": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=805012302,1872400680&fm=26&gp=0.jpg",
                        "user": "@安霞",
                        "content": msg,
                        "time": date,
                        "goods": 0
                    }
                    this.getpush(data) 
            }
        },
        mounted(){
          
        }
       

    }
</script>

<style scoped>

    .mark {
        width: 100%;
        height: 70%;
        background: rgb(0, 0, 0, .8);
        position: fixed;
        bottom: 0px;
        left: 0;
        display: flex;
        flex-direction: column;
        color: #FFF;
        transform: translate3d(0,100%,0);
        transition: 1s;
        z-index: 888;
    }
    .active{
         transform: translate3d(0,0,0);
        transition: 1s;
    }
    .title{
        height:30px;
        line-height:30px;
        text-align: center;
    }
   /* basic style */
.close {
    /* still bad on picking color */
    background: #fff;
    color: #000;
    /* make a round button */
    border-radius: 12px;
    /* center text */
    line-height: 20px;
    text-align: center;
    height: 20px;
    width: 20px;
    font-size: 18px;
    padding: 1px;
}
/* use cross as close button */
.close::before {
    content: "\2716";
}
/* place the button on top-right */
.close {
    top: -10px;
    right: 0px;
    position: absolute;
}
    .list{
        flex: 1;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        color: #fff;
    }
    .list dl {
        margin-top: 10px;
        display: flex;
        margin:  5px;
        box-sizing: border-box;
    }
     .list dl dt{
         flex: 1;
     }
    .list dl dt img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .list dl dd{
        flex: 7;
        line-height: 1.5;
        margin-left: 5px;
    }
    .user{
        font-size: 12px;
    }
    .tit{
        font-size: 14px;
    }
    .time{
        font-size: 12px;
    }
    .send {
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .send input{
        flex:8;
        width: 100%;
        border: none;
    }
    .send button{
        height: 40px;
        line-height: 40px;
        flex: 2;
        background: #ccc;
        color: #fff;
        border: none;
    }
    .aside{
        flex: 1;
        text-align: center;
    }
    .numm{
       text-align: center;
    }
    .asside img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
      
    }
</style>