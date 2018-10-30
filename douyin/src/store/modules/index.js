
const state={
    shakesList:[],
    alertList:[],
}
const mutations={
    updatashakesList(state,payload){
        state.shakesList=payload
    },
    updataalertList(state,payload){
        state.alertList=payload
    },
    updataIndexList(state,payload){
        state.alertList.map((item,index)=>{      
         
                if(index==payload){
                   if(!item.is){
                    item.goods+=1;
                    item.is=!item.is
                   }else{
                      
                    item.goods-=1;
                    item.is=!item.is
                   }
                }
        })
    },
    uppush(state,payload){
        state.alertList.unshift(payload)
    }
}
const actions={
    getshakesList({commit}){
        fetch('https://www.easy-mock.com/mock/5b62c22b3469e27da6596a2a/example/shakesList')
        .then(res=>res.json())
        .then(body=>{
           
            commit('updatashakesList',body)
        })
  
    },
    getalertList({commit},payload){
        fetch('https://www.easy-mock.com/mock/5b62c22b3469e27da6596a2a/example/shakesList')
        .then(res=>res.json())
        .then(body=>{
            body.map((item,index)=>{  
                if(item.id==payload){
                    commit('updataalertList',item.commentList);
                }
            })
            
        })
  
    },
    getpush({commit},payload){
      
        commit('uppush',payload)
    },
    getIndex({commit},payload){
        commit('updataIndexList',payload)
       
    }
}
export default{
    namespaced:true,//命名空间
    state,
    mutations,
    actions
}