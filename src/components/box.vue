<template>
  <div class="box" @click="go(msg.link)">
          <div class="tittle">
            {{msg.title}}
          </div>
          <div class="text">{{msg.text}}</div>
          <!-- <div class="link" >
            {{msg.link}}
          </div> -->
        </div>
</template>

<script>
export default {
    props:{
        msg:{
            default:true
        },
        
    },
      methods: {
    go(path) {
      window.open(path);
    },
  },
}
</script>

<style>
    .box{
        color: #000;
        background-color: rgba(255, 255, 255, 0.85);
        /* background-color: #d9f5f2; */
        /* opacity: 0.8; */
        border-radius: 5px;
        padding: 5px 10px ;
        width: 400px;
        display: inline-block;
        margin: 30px;
        cursor: default;
        padding-bottom: 10px;
    }
    .tittle{
        font-size: 20px;
        font-weight: 800;
        margin: 10px 0;
    }
    .text{
        font-size: 12px;
    }
    .link{
        font-size: 12px;
        color: cornflowerblue;
    }
</style>