<template>
  <div class="city-page">
    <header-top>
      <span slot='logo' class="head-top-logo" @click="reload">ele.me</span>
    </header-top>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import HeaderTop from '@/components/headerTop/HeaderTop'
export default {
  
      default: '我就是city组件'
    }
  },
  components: {
    HeaderTop
  }
}
</script>

<style  lang="scss">
h1 {
  margin: 40px 0 0;
}

</style>
