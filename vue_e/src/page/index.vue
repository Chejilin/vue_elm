<template>
  <div class="index">
    <!-- 谁使用就包谁 -->
    <scroller ref="myScroller" :on-infinite="infinite">
      <!-- 头部 -->
      <div class="index_header">
        <div class="position_bar">
          <div class="position_box">
            <i class="icon iconfont icon-dingwei"></i>
            <span>北京市昌平区</span>
          </div>
          <div class="weather_box">
            天气11
          </div>
        </div>
        <div class="search">
          搜索商家、商品
        </div>
        <div class="swiper_box">
          <div class="swiper-container sw_1">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="width: auto">张亮麻辣烫</div>
              <div class="swiper-slide" style="width: auto">烤肉饭</div>
              <div class="swiper-slide" style="width: auto">水果捞</div>
              <div class="swiper-slide" style="width: auto">珍珠奶茶</div>
              <div class="swiper-slide" style="width: auto">我的菜</div>
              <div class="swiper-slide" style="width: auto">肯德基</div>
              <div class="swiper-slide" style="width: auto">千层蛋糕</div>
              <div class="swiper-slide" style="width: auto">麻辣香锅</div>
            </div>
            <!-- 如果需要分页器 -->
            <!--<div class="swiper-pagination"></div>-->

            <!-- 如果需要导航按钮 -->
            <!--<div class="swiper-button-prev"></div>-->
            <!--<div class="swiper-button-next"></div>-->

            <!-- 如果需要滚动条 -->
            <!--<div class="swiper-scrollbar"></div>-->
          </div>
        </div>
      </div>
      <!-- 轮播区域 -->
      <div class="swiper_lunbo">
        <div class="swiper-container sw_2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>美食</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>果蔬生鲜</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <div><img
                  src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                  alt=""></div>
                <span>甜品饮品</span>
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <!-- 数据 -->
      <div class="shop_sj">
        <h3>推荐商家</h3>
        <ul>
           <!--  路由传参  :to="{path:'/shop/'+index}" -->
          <router-link tag="li":to="{path:'/shop/'+index}" v-for="(s,index) in list" :key="index">
              <img :src="s.avatar" alt="">
              <div class="info">
                <div class="title">
                  {{s.name}}
                </div>
                <div class="star">
                  月售{{s.sellCount}}单
                </div>
                <div class="dilivery">
                  {{s.minPrice}}元起送 / 配送费{{s.deliveryPrice}} / ￥{{s.rankRate}}人
                </div>
              </div>
          </router-link>
        </ul>
      </div>
    </scroller>
    <!-- 底部导航 -->
    <footer-nav></footer-nav>
  </div>
</template>


<script>
  import Vue from 'vue'
  /* 引入vue-swipe */
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  /*  引入底部导航*/
  import footerNav from '@/components/footerBar'
  /* 引入vue-scroll */
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller);

  export default{
    data(){
      return {
        noData:false,
        //存放数据
        list: [],
        //模拟总数据(所有数据在这里)
        totalSeller:[]
      }
    },
    //注册组件
    components: {
      footerNav,
      VueAwesomeSwiper
    },
    /* 初始化 */
    mounted(){
      //上导航
      var mySwiper = new Swiper('.sw_1', {
        //设置垂直/水平
        direction: 'horizontal',

        //循环
//        loop: true,

        //一页显示多少个 auto自适应
        slidesPerView: 'auto',//'auto'

        // 如果需要分页器
//        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
//        nextButton: '.swiper-button-next',
//        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
//        scrollbar: '.swiper-scrollbar',
      });
      //轮播
      var mySwiper1 = new Swiper('.sw_2', {
        // autoplay: 1000,//可选选项，自动滑动

        // 如果需要分页器
        pagination: '.swiper-pagination',

        //分几列
        slidesPerColumn: 2,

        //一页显示多少个 auto自适应
        slidesPerView: 4,//'auto'

        //几个占一页
        slidesPerGroup: 8,
//
//
        //设置垂直/水平
//        direction: 'horizontal'
      });
      //获取seller数据(在dev-server.js里的数据)
      this.axios.get('http://localhost:8080/api/seller').then((res)=>{
          if(res.data.error == 0){
              this.totalSeller = res.data.data;
              //创建一个变量存放原来的内容(temp复制的原来的内容)
              let temp = this.totalSeller;
              //截取5条(页面上暂时显示5条)
              this.list = temp.splice(0,5);
          }
      })
    },
    //存方法
    methods: {
      //加载
      infinite(done){
        //this指向问题
        let self = this;
        //判断noData  如果为true时说明没有数据了
        if(self.noData){
            setTimeout(()=>{
              self.$refs.myScroller.finishInfinite(2)
            });
          return;
        }
        let start = this.list.length;
        //需要异步 计时器模拟
        setTimeout(()=>{
             let total = self.totalSeller;
             let temp = total.splice(start,2);
//             console.log(temp);
          if(temp.length == 0){
              self.noData = true
          }
          //合并
             this.list = this.list.concat(temp);
             self.$refs.myScroller.resize();
             done();
        },2000)
      }
    }
  }
</script>

<style lang="less">
  @import "../../static/less/var.less";

  .index {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: @base *100rem;

  .index_header {
    height: @base *204rem;
    padding: @base *20rem @base *28rem;
    background-color: @mc;

  .position_bar {
    height: @base *69rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

  .position_box {
    width: @base *417rem;
  }

  .weather_box {
    width: @base *106rem;
  }

  }

  .search {
    height: @base *70rem;
    margin: @base *15rem;
    padding: @base *1rem;
    background-color: #fff;
    color: @textColor;
    text-align: center;
    border-radius: 20px;
    font-size: @base *25rem;
    line-height: @base *70rem;
  }

  }

  .swiper_box {
    font-size: @base *25rem;

  .swiper-slide {
    padding: 0 @base *10rem;
    color: #fff;
  }

  }

  .swiper_lunbo {
    height: @base *354rem;

  .swiper-pagination {
    bottom: 0;
  }

  .sw_2 {
    height: @base *354rem;

  .swiper-slide {
    text-align: center;
    height: 50%;

  a {
    color: @textColor;
    font-size: @base *20rem;

  img {
    width: @base *80rem;
  }

  }
  }
  }
  }

     .shop_sj{
       background: #fff;
       margin-top:@base*10rem;
       h3{
         font-size:@base*30rem;
         padding:@base*20rem;
       }
       ul{
         width:100%;
         list-style: none;
         li{
           display: flex;
           justify-content: space-between;
           padding:@base*10rem @base*20rem;
           border-bottom:1px solid @borderColor;
           img{
             width: @base*90rem;
             height: @base*90rem;
           }
           .info{
             display: flex;
             flex-grow: 1;
             margin-left: @base*20rem;
             font-size: @base*20rem;
             flex-direction: column;
           }
         }
       }
     }

  }


</style>
