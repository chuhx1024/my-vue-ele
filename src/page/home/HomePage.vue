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
        <svg class="icon">
          <use xlink:href="#iconjiantouyou"></use>
        </svg>
      </router-link>
    </nav>
    <section class="group-city-container">
      <ul>
        <li v-for="(val, key, index) in sortGroupCity" :key= key class="group-city-container-item" >
          <h4 class="city-title">{{key}}
            <span v-if="index===1">(按字母排序)</span>
          </h4>
          <ul class="city-list-ul">
            <router-link tag="li" v-for="item in val" to="/city" :key="item.id" class="ellipsis">
              {{item.name}}
            </router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import HeaderTop from '@/components/headerTop/HeaderTop'
import { hotCity, cityGuess, groupCity } from '@/service/getData.js'
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
  data () {
    return {
      hotCity: [], // 热门城市列表
      groupCity: {} // 所有城市列表
    }
  },
  computed: {
    // 热门城市排第一 获取到的group城市数据按字母|A-Z|排序
    sortGroupCity () {
      let sortObj = {}
      sortObj['热门城市'] = this.hotCity
      for (let i = 65; i <= 90; i++) {
        if (this.groupCity[String.fromCharCode(i)]) {
          sortObj[String.fromCharCode(i)] = this.groupCity[String.fromCharCode(i)]
        }
      }

      return sortObj
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 获取当前城市
      cityGuess().then(res => {
        console.log(res)
      })

      // 获取热门城市
      hotCity().then(res => {
        console.log(res)
        this.hotCity = res
      })

      // 获取所有城市
      groupCity().then(res => {
        console.log(res)
        this.groupCity = res
      })
    },
    reload () {
      window.location.reload()
    }
  }

}
</script>

<style  lang="scss" >

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
      padding: 0 0.45rem;
      justify-content: space-between;
      border-top: 1px solid $bc;
      border-bottom: 2px solid $bc;
      height: 1.8rem;
      color: #999;
      font-size: 0.75rem;
      line-height: 1.8rem;
      margin-bottom: 0.4rem;
      span:nth-of-type(1) {
        color: $blue;
      }

    }
  }
  .group-city-container-item {
    margin-bottom: 0.4rem;
    &:first-child {
      li {
        color: $blue;
      }
    }
    .city-title {
      text-indent: 0.45rem;
      font-size:0.55rem;
      line-height: 1.45rem;
      border-top: 2px solid $bc;
      border-bottom: 1px solid $bc;
    }
    .city-list-ul {
      display: flex;
      flex-wrap: wrap;
      li {
        @include wh(25%, 1.75rem);
        @include font(0.6rem, 1.75rem);
        text-align: center;
        border-right: 1px solid $bc;
        border-bottom: 1px solid $bc;
        &:nth-of-type(4n) {
          border-right: none;
        }
      }
    }
  }
}

</style>
