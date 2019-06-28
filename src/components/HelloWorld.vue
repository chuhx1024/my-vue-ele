<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  // 引用的组件
  components: {
    Ref
  },
  // 声明一个本地过滤器
  filters: {
    Upper (val) {
      return val.toUpperCase()
    }
  },

  mixins: [],
  //父组件传递过来的数据（两种方式声明：1.数组 2.对象）
  //数组方式
  props: ['age'],
  //对象方式
  /*props: {
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  }*/

  data () {
    return {

    }
  },
  
  computed: {
    taxType: function () {
      return this.tableData.taxType
    }
  },

  watch: {
    activeId (newId, oldId) {
      console.log(newId)
      console.log(oldId)
    },
  },

  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},

  methods () {
    add () {
      console.log('我是一个函数')
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
