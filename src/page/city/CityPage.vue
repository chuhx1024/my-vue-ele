<template>
  <div class="city-page">
    <header-top :headerTitle="this.cityName" :goBack="true">
      <!-- <span slot='logo' class="head-top-logo">ele.me</span> -->
    </header-top>
    <form class="city-form" @submit.prevent>
      <div>
        <input type="search" v-model="inputValue" placeholder="输入学校、商务楼、地址" class="input-style city-input">
      </div>
      <div>
        <input @click="submit" type="submit" value="提交" class="input-style city-button">
      </div>
    </form>
    <header v-if="historyTitle" class="history-list-title">搜索历史</header>
    <ul class="history-list-container">
      <li @click="nextPage(index,item.geohash)" v-for="(item, index) in placeList" :key="index">
        <h4>{{item.name}}</h4>
        <p>{{item.address}}</p>
      </li>
    </ul>
    <footer @click="clearAll" class="clear-all">清空所有</footer>
  </div>
</template>

<script>
import HeaderTop from '@/components/headerTop/HeaderTop'
import { searchPlace } from '@/service/getData'
import { getStore, setStore, removeStore } from '@/config/utils'
export default {
  components: {
    HeaderTop
  },
  data () {
    return {
      inputValue: '', // 搜素地址
      cityId: '', // 城市id
      cityName: '', // 城市名字
      placeList: [], // 搜索到的城市列表
      placeHistory: [], // 历史搜索记录
      historyTitle: true // 默认显示搜索历史的title  点击提交后隐藏

    }
  },
  mounted () {
    this.cityId = this.$route.query.id
    this.cityName = this.$route.params.cityName
    this.initData()
  },
  methods: {
    initData () {
      let temp = getStore('placeHistory')
      if (temp) {
        this.placeList = JSON.parse(temp)
      } else {
        this.placeList = []
      }
    },
    submit () {
      if (this.inputValue) {
        searchPlace(this.cityId, this.inputValue).then(res => {
          this.historyTitle = false
          this.placeList = res
        })
      }
    },

    nextPage (index, geohash) {
      let history = getStore('placeHistory')
      let choosePlace = this.placeList[index]
      console.log(choosePlace, 1)
      if (history) {
        this.placeHistory = JSON.parse(history)
        let noExist = true
        this.placeHistory.forEach(item => {
          if (item.geohash === geohash) {
            noExist = false
          }
        })
        if (noExist) {
          this.placeHistory.push(choosePlace)
        }
      } else {
        this.placeHistory.push(choosePlace)
        console.log(this.placeHistory, 2)
      }
      setStore('placeHistory', this.placeHistory)
    },

    clearAll () {
      removeStore('placeHistory')
      this.initData()
    }
  }
}
</script>

<style  lang="scss">
@import '../../style/mixin';
.city-page {
  padding-top: 2.3rem;
  font-size: 0.4rem;
  .city-form {
    background-color: #fff;
    padding-top: .3rem;
    height: 3.4rem;
    height: 3.4rem;
    div {
      width: 90%;
      margin: 0 auto;
      .input-style {
        font-size: .6rem;
        border-radius: 0.1rem;
        @include wh(100%, 1.4rem)
      }
      .city-input {
        border: 1px solid $bc;
        padding: 0 0.3rem;
        margin-bottom: .3rem;
      }
      .city-button {
        background-color: $blue;
      }
    }
  }
  .history-list-title {
    height: .8rem;
    line-height: .8rem;
    padding-left: .35rem;
  }
  .history-list-container {
    background-color: #fff;
    border-top: 1px solid $bc;
    li {
      padding-left: .55rem;
      border-bottom: 1px solid $bc;
      padding-top: 0.65rem;
      h4 {
        @include sc(.65rem, #333);
        margin-bottom: .35rem;
      }
      p {
        @include sc(.45rem, #999);
        margin-bottom: .55rem;
      }
    }
  }
  .clear-all {
    background-color: #fff;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    font-size: .6rem;
  }
}

</style>
