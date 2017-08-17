<template>
  <div>
    <div class="shop_head">
      <!-- 回退按钮 -->
      <div class="shop_back">
        <router-link to="/index" tag="i" class="icon iconfont icon-back"></router-link>
      </div>

      <!-- 头部背景模糊 -->
      <div class="background">
        <img :src="seller.avatar" alt="">
      </div>

      <div class="shop_info">
        <img :src="seller.avatar" alt="">
        <div class="shop_detail">
          <div class="title">
            {{seller.name}}
          </div>
          <div class="dilivery">
            商家配送：{{seller.deliveryTime}} 分钟送达 / 配送费 ￥ {{seller.deliveryPrice}}
          </div>
          <div class="notice">
            本公司提供专业发票
          </div>
        </div>
      </div>

    </div>

    <div class="shop_nav">
         <div>商品</div>
         <div>评价</div>
    </div>

    <sss></sss>

  </div>

</template>

<script>
  import sss from '@/components/shangpin'
  export default{
    data(){
      return {
        //传过来的是一个数组
        seller: {
          type: Array
        }
      }
    },
    components:{
        sss
    },
    mounted(){
      /* 通过this.$route.params  获取到当前点击的id */
      let id = this.$route.params.id;
      /* 因为没有真实后台数据  所以要全部获取到 */
      this.axios.get('http://localhost:8080/api/seller').then((res) => {
        let sellers = res.data.data;
        this.seller = sellers[id];
      })
    }
  }
</script>

<style lang="less">
  @import '../../static/less/var.less';

  .shop_head {
    height: @base *261rem;
    position:relative;
    overflow:hidden;

  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:-1;
    filter:blur(15px);

  img{
    width: 100%;
    height: 100%;
  }
  }

  .shop_back {
    height: @base *55rem;
    padding: @base *8rem @base *20rem;

  i {
    font-size: @base *55rem;
    color: #fff;
    line-height: @base *55rem;
  }

  }

  .shop_info {
    height: @base *130rem;
    padding: 0 @base *20rem;
    display: flex;
    justify-content: space-between;

  img {
    width: @base *128rem;
    height: @base *128rem;
    border-radius: 3px;
  }

  .shop_detail {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-left: @base *30rem;
    color: #fff;
    font-size: @base *20rem;
  }

  .title {
    font-size: @base *35rem;
  }

  }

  }

  .shop_nav{
    width: 100%;
    display: flex;
    text-align:center;
    border-bottom:1px solid #cacaca;
    div{
      flex-grow: 1;
      padding: @base*20rem;
      color: @textColor;
    }
  }
</style>
