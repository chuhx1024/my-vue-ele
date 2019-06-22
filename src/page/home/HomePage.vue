<template>
  <div class="home-page">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: {
      type: String,
      default: '我就是home组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}

</style>
