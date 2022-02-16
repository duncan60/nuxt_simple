<template>
  <div>
    <h1 class="red">index page content</h1>
    <div>{{ content }}</div>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    title: 'nuxt_simple - HOME'
  },
  asyncData() {
    return { content: 'Created at: ' + new Date() }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
    // })
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    }
  }
}
</script>

<style scoped>
  .red {
    color: red;
  }
</style>