<template>
    <div class="carbutton">
        <i @click="reduce()"  v-if="food.count>0" class="icon iconfont icon-jianhao1"></i>
        <span v-if="food.count>0">{{food.count}}</span>
        <i class="icon iconfont icon-iconfontxinzeng" @click="add($event)"></i>
    </div>
</template>

<script>
  import Vue from 'vue';
    export default{
        props:{
            food:{
                type:Object
            }
        },
      mounted(){

      },
      methods:{
          /* 加 */
          add(event){
            if(!this.food.count){
                Vue.set(this.food,'count',1)
//                this.food.count = 1;
              }else{
                this.food.count ++;
            }
            this.$emit('ball-click',event.target)
//            console.log(event.target);
          },
        /* 减 */
          reduce(){
            this.food.count --;
          }
      }
    }
</script>

<style lang="less">
 @import "../../static/less/var.less";
  .carbutton{
       font-size: @base*30rem;
       color: @mc;
    span{
      width: @base*40rem;
      color: @textColor;
      padding: @base*15rem;
      font-weight: 100;
    }

  }
</style>
