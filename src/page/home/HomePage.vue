<template>
  <div class="home-page">
    <header-top>
      <span slot='logo' class="head-top-logo" @click="reload">ele.me</span>
    </header-top>
    <nav class="home-page-city-nav">
      <div class="city-tip">
        <span>当前定位城市:</span>
        <span>定位不准时,请在城市列表中选择:</span>
      </div>
      <router-link to="./city" class="guess-city">
        <span>北京</span>
        <svg class="icon svg-icon">
          <use xlink:href="#iconjiantouyou"></use>
        </svg>
        iconjiantouxia
      </router-link>

    </nav>
  </div>
</template>

<script>
import HeaderTop from '@/components/headerTop/HeaderTop'
export default {
  name: 'HomePage',
  props: {
    msg: {
      type: String,
      default: '我就是home组件'
    }
  },
  components: {
    HeaderTop
  },
  methods: {
    reload () {
      window.location.reload()
    }
  }

}
</script>

<style  lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
@import '../../style/mixin';
.home-page{
  .head-top-logo {
    font-size: 0.7rem;
    font-weight: 400;
    color: #fff;
    display: inline-block;
    height: 100%;
    line-height: 1.95rem;
    padding-left: 0.4rem;
  }
  .home-page-city-nav {
    padding-top: 2rem;
    .city-tip {
      display: flex;
      justify-content: space-between;
      line-height: 1.45rem;
      padding: 0 0.45rem;
      span:nth-of-type(1) {
        font-size: 0.55rem;
        color: #666
      }
      span:nth-of-type(2) {
        font-weight: 900;
        font-size: 0.475rem;
        color: #9f9f9f
      }

    }
    .guess-city {
      display:flex;
      justify-content: space-between;
      border-top: 1px solid $bc;
    }
  }
}

</style>
