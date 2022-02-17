<template>
  <div>
    <h2>{{ id }}</h2>
  </div>
</template>
<script>
export default {
  async asyncData(context) {
    const id = context.params.id
    try {
      return { id, }
    } catch (e) {
      context.error(e) // Show the nuxt error page with the thrown error
    }
  }
}
</script>