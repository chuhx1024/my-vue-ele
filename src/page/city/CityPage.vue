<template>
  <div class="city-page">
    <header-top :headerTitle="this.$route.params.cityName" :goBack="true">
      <!-- <span slot='logo' class="head-top-logo">ele.me</span> -->
    </header-top>
    <form class="city-form">
      <div>
        <input type="search" v-model="inputValue" placeholder="输入学校、商务楼、地址" class="input-style city-input">
      </div>
      <div>
        <input type="submit" value="提交" class="input-style city-button">
      </div>
    </form>
    <header>搜索历史</header>
    <section>
      <ul>
        <li>
          <h4>中国</h4>
          <p>南大街</p>
        </li>
        <li>
          <h4>中国</h4>
          <p>南大街</p>
        </li>
        <li>
          <h4>中国</h4>
          <p>南大街</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import HeaderTop from '@/components/headerTop/HeaderTop'
export default {
  components: {
    HeaderTop
  },
  data () {
    return {
      inputValue: '占位'
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
}

</style>
