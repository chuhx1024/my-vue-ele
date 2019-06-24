<template>
  <div class="header-top">
    <slot name='logo'></slot>
    <section class="header-top-goback" v-if="goBack" @click="$router.go(-1)">
      <svg class="icon">
        <use xlink:href="#iconfanhui"></use>
      </svg>
    </section>
    <section class="header-top-title" v-if="headerTitle">
      <span>{{headerTitle}}</span>
    </section>
    <router-link to="./city" class="header-top-login">
      <span>登录|注册</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    goBack: {
      type: Boolean,
      default: false
    },
    headerTitle: {
      type: String,
      default: ''
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

  .header-top-goback {
    display: inline-block;
    padding-left: 0.4rem;
    @include wh(0.4rem, 1.95rem);
    line-height: 1.95rem;

  }
  .header-top-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
