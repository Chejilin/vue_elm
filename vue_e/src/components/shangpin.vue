<template>
  <div>
    <div class="one">
      <!-- ref 可以获取到dom元素 -->
      <div class="sp_left" ref="left_Scroll">
        <div>
          <div @click="scrollTo(index)" class="item" :class="{act:men === index}"  v-for="(s,index) in sjleft">
            {{s.name}}
          </div>
        </div>
      </div>
      <div class="sp_right" ref="right_Scroll">
        <div>
          <dl v-for="q in sjleft">
            <dt>{{q.name}}</dt>
            <dd v-for="food in q.foods">
              <img :src="food.icon" alt="">
              <div class="right_1">
                <h4>{{food.name}}</h4>
                <p class="desc" v-if="food.info">{{food.info.substr(0,20)+'...'}}</p>
                <p class="rating">月售{{food.sellCount}}份 好评率{{food.rating}}</p>
                <p class="price">
                  <span>￥{{food.price}}</span>
                  <carbtn style="position: absolute;right: 0;top: 0" :food="food" @ball-click="ballEvent"></carbtn>
                </p>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <shop :selectFoods="selectFoods" ref="shopCart"></shop>
  </div>
</template>

<script>
  import shop from '@/components/shopcart';
  /* 引入 better-scroll */
  import BScroll from 'better-scroll'
  /* 引入加减按钮 */
  import carbtn from '@/components/btn'
  export default{
    data(){
      return {
        sjleft: {
            type:Array
        },
        heights:[],
        scrollY:0
      }
    },
    components: {
      shop,
      BScroll,
      carbtn
    },
    mounted(){
      //获取到要使用的数据
      this.axios.get("http://localhost:8080/api/goods").then((res) =>  {
        if (res.data.error == 0) {
          this.sjleft = res.data.data;
          //数据绑定完之后执行的 (不加浏览器不知道高度多少)
          this.$nextTick(()=>{
              //调用初始化滚动条的函数(如果出不来 在元素外面套一个div)
                this._initScroll(),
                this._countHeight()
          });
//          console.log(this.sjleft);
        }

      })
    },
    //计算属性
    computed:{
        //判断添加对应的边框
        men(){
           for(let i = 0; i < this.heights.length; i++){
               let now = this.heights[i];
               let next = this.heights[i+1];
               if(now >= this.scrollY && this.scrollY < next){
                   return i;
               }else if(!next){
                   return i;
               }
           }
           return 0;
        },
        selectFoods(){
             let foods = [];
             if(this.sjleft.length == 0){
               return []
             };
             for(var i = 0; i < this.sjleft.length; i++){
                    let good = this.sjleft[i]
                    good.foods.forEach(food=>{
                        if(food.count > 0){
                            foods.push(food)
                        }
                    })
             }
            return foods;
        }
    },
    methods:{
        //小球事件
      ballEvent(target){
        this.$refs.shopCart.ballClick(target)
//        console.log(target);
      },
        //初始化滚动条
        _initScroll(){
            this.left_Scroll = new BScroll(this.$refs.left_Scroll,{
                //绑定scroll点击事件被屏蔽  所以改为true
                click:true
            });
            this.right_Scroll = new BScroll(this.$refs.right_Scroll,{
                //实时派发滚动事件
              probeType:3,
              click:true
            });
            //监听scroll事件
            this.right_Scroll.on('scroll',(pos)=>{
                //转为正值  (pos里的y参数)
              this.scrollY = Math.abs(Math.round(pos.y))
              console.log(this.scrollY);
            })

        },
        //获取到dt离上边的高度
        _countHeight(){
            //找到right_Scroll里面的dt
          let dts = this.$refs.right_Scroll.getElementsByTagName('dt');
            //找到每一个dt的offsetTop   存入heights数组里
          for(let i = 0; i < dts.length; i++){
              this.heights.push(dts[i].offsetTop);
          }
//          console.log(this.heights);

        },
        //点击左边返回对应的菜单
        scrollTo(index){
            //参数(x,y,time)
            this.right_Scroll.scrollTo(0,-this.heights[index],200)
      }
    }
  }
</script>

<style lang="less">
  @import "../../static/less/var.less";

  .one {
    width: 100%;
    position: absolute;
    top: @base *350rem;
    bottom: @base *96rem;
    display: flex;
    overflow:hidden;

  .sp_left {
    width: @base *200rem;
  .item {
    color: @textColor;
    border-bottom: 1px solid @borderColor;
    padding:@base*30rem @base*20rem;
    padding-left:@base*15rem;
  font-size: @base*30rem;
  &.act {
    border-left: 3px solid @mc;
  }

  }
  }

  .sp_right {
    flex-grow: 1;
    dl{
      dt{
        padding:@base*10rem @base*20rem ;
        color: #333;
        font-size: @base*24rem;
        background: #dfdfdf;
      }
      dd{
            display:flex;
            padding:@base*10rem @base*20rem;
            border-bootom:1px solid @borderColor;
       img{
          width: @base*104rem;
          height:  @base*104rem;
        }
        .right_1{
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: @base*20rem;
          color:@textColor;
          h4{
            color: #333;
            font-size: @base*30rem;
          }

          .desc{
            font-size: @base*8rem;
          }

          .rating{
            font-size: @base*8rem;
          }

          .price{
            position: relative;
               font-size: @base*30rem;
               font-weight: 700;
               color: red;
          }
        }
      }
    }
  }

  }
</style>
