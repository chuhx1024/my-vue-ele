<template>
  <div class="header-top">
    <slot name='logo'></slot>
    <router-link to="./city" class="header-top-login">
      <span>登录|注册</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    msg: {
      type: String,
      default: '我就是headerTop'
    }
  }
}
</script>

<style lang="scss">

@import '../../style/mixin';

.header-top {
  background-color: $blue;
  position: fixed;

  @include wh(100%, 1.95rem);
  .header-top-login {
    float: right;
    height: 100%;
    color:#fff;
    font-size: 0.65rem;
    span {
      display: inline-block;
      height: 100%;
      line-height: 1.95rem;
      padding-right: 0.55rem;
    }
  }
}

</style>
