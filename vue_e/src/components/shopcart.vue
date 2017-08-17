
<template>
  <div class="shopcart">
    <div class="gwc" @click="isShow=!isShow">
      <span v-if="totalCount">{{totalCount}}</span>
      <div class="tp" :class="{act:totalCount,animated:animate,bounceIn:animate}">
        <i class="icon iconfont icon-gouwuche"></i>
      </div>
      <div class="wz">
        <p style="color: #fff;">￥{{totalPrice}}</p>
        <p style="color: #fff;">配送费￥7元</p>
      </div>
    </div>
    <div class="jiesuan">
      <div :class="{act:totalPrice>0}">去结算</div>
    </div>
    <transition name="slide">
      <div class="cart-list" v-show="isShow&&selectFoods.length>0">
        <div class="cart-head">
          <span class="car">购物车</span>
          <span class="clear"><i class="icon iconfont icon-lajitong"></i>清除</span>
        </div>
        <ul>
          <li v-for="food in selectFoods" class="food-list">
            <span>{{food.name}}</span>
            <span class="price">￥{{food.price}}</span>
            <span class="button-box">
                  <cartbutton :food="food"></cartbutton>
               </span>
          </li>
        </ul>
      </div>
    </transition>

    <!-- 小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" v-for="(ball,index) in balls"
               :key="index">
      <div class="ball-container" v-show="ball.show">
        <div class="in"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  import cartbutton from '@/components/btn'
  export default{
    data(){
      return {
        animate:false,
        dropDown: false,
        dropBalls: [],
        balls: [
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false}
        ],
        isShow: false
      }
    },
    methods: {
      beforeEnter(el){
        //el是当前的小球div
        let count = this.balls.length;
          while(count--){
          let ball = this.balls[count]
          if(ball.show){
            let rect = ball.target.getBoundingClientRect();
            let left = rect.left - 35;
            let top = -(window.innerHeight - rect.top - 50);
            el.style.display = 'block';
//            console.log(left, top);
            el.style.transform = `translate3d(0,${top}px,0)`;
            el.style.webkitTransform = `translate3d(0,${top}px,0)`
            let inner = el.getElementsByClassName('in')[0]
            inner.style.transform = `translate3d(${left}px,0,0)`;
            inner.style.webkitTransform = `translate3d(${left}px,0,0)`
          }
        }
      },
      enter(el,done){
        //调用后执行afterEnter
        //运动小球
        let rest = el.offsetHeight;   //触发浏览器重绘
        this.$nextTick(()=>{
          el.style.transform = 'translate3d(0,0,0)';
          el.style.webkitTransform = 'translate3d(0,0,0)';
          let inner = el.getElementsByClassName('in')[0];
          inner.style.transform = 'translate3d(0,0,0)';
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend',done)
        })

      },
      afterEnter(el){
         let ball = this.dropBalls.shift();
         if(ball.show){
             ball.show = false;
             el.style.display = 'none';
             this.animate = true;
             let self = this;
             clearTimeout(t)
             let t = setTimeout(()=>{
                 self.animate = false;
             },1000)
         }
      },
      ballClick(target){
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true;
            ball.target = target;
            this.dropBalls.push(ball)
            return;
          }
        }
      }
    },
    props: {
      selectFoods: {
        type: Array,
        default(){
          return [
            {count: 1, price: 10},
            {count: 2, price: 20}
          ]
        }
      }
    },
    computed: {
      //购物数量
      totalCount(){
        let total = 0;
        this.selectFoods.forEach(food => {
          total += food.count
        });
        return total;
      },
      //总价钱
      totalPrice(){
        let total = 0;
        this.selectFoods.forEach(food => {
          total += food.count * food.price
        });
        return total;
      }
    },
    components: {
      cartbutton
    }
  }
</script>

<style lang="less">
  @import "../../static/less/var.less";

  .shopcart {
    width: 100%;
    height: @base *96rem;
    background-color: #565658;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;

  .ball-container {
    position: absolute;
    left: 35px;
    z-index: 300;
    transition: 1s cubic-bezier(0,0,0.41,-0.5);

  .in {
    transition: 1s;
    width: @base *35rem;
    height: @base *35rem;
    border-radius: 50%;
    background: @mc;
  }

  }

  &
  >
  div {
    width: 50%;
  }

  .gwc {
    display: flex;
    position: relative;
    z-index: 10;

  span {
    text-align: center;
    position: absolute;
    width: @base *40rem;
    height: @base *40rem;
    top: @base *-35rem;
    left: @base *100rem;
    z-index: 12;
    border-radius: 50%;
    background-color: red;
  }

  .tp {
    position: absolute;
    top: @base *-30rem;
    left: @base *40rem;
    width: @base *90rem;
    height: @base *90rem;
    border-radius: 50%;
    border: 3px solid #565658;
    text-align: center;
    line-height: @base *90rem;
    background: #717171;

  i {
    font-size: @base *50rem;
    color: #fff !important;
  }

  }
  .wz {
    margin-left: @base *190rem;

  p {
    margin-top: @base *3rem;

  }

  }
  }

  .jiesuan {
    z-index: 10;

  .act {
    background-color: @mc;
  }

  div {
    float: right;
    width: @base *200rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #737375;
    color: #fff;

  }

  }

  .act {
    background-color: @mc !important;
  }

  .cart-list {
    overflow: auto;
    max-height: @base *681rem;
    width: 100%;
    position: absolute;
    bottom: @base *96rem;
    background-color: #fff;

  .food-list {
    height: @base *80rem;
    padding: @base *15rem @base *25rem;
    border-bottom: 1px solid @borderColor;
    line-height: @base *80rem;
    display: flex;
    justify-content: space-between;
    z-index: 10;
  }

  .cart-head {
    height: @base *81rem;
    background: #e6e6e6;
    padding: @base *5rem @base *20rem;
    line-height: @base *81rem;

  .car {
    padding-left: @base *10rem;
    border-left: @base *5rem solid @mc;
  }

  .clear {
    float: right;
  }

  }
  }
  }

  .slide-enter-active, .slide-leave-active {
    transition: 0.5s;
  }

  .slide-enter {
    transform: translateY(100%);
    opacity: 0;
  }

  .slide-leave-active {
    transform: translateY(100%);
    opacity: 0;
  }
</style>
