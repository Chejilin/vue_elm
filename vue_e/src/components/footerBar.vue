<template>

  <div class="footer">
    <router-link  to="/index" tag="div" activeClass="act">
      <i class="icon iconfont icon-changyonglogo40"></i>
      <span>外卖</span>
    </router-link>

   <router-link to="/discover" tag="div" activeClass="act">
       <i class="icon iconfont icon iconfont icon-faxian"></i>
       <span>发现</span>
   </router-link>

   <router-link to="/indent" tag="div" activeClass="act">
       <i class="icon iconfont icon iconfont icon-icon"></i>
       <span>订单</span>
   </router-link>

   <router-link to="/mine" tag="div" activeClass="act">
       <i class="icon iconfont icon iconfont icon-wode"></i>
       <span>我的</span>
   </router-link>
  </div>

</template>

<script>
  export default{}
</script>

<!-- lang 语言 -->
<style lang="less">
  /* 引入less文件 */
  @import "../../static/less/var.less";

  .footer {
    width: 100%;
    height: @base *100rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: #fff;
    border-top: 1px solid @borderColor;

  div {
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: @base *16rem;
    color: @textColor;

  &.act{
    color: @mc;
   }

  i {
    font-size: @base *32rem;
  }

  span {
    font-size: @base *24rem;
  }

  }

  }
</style>
