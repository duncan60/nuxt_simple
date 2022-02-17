<template>
  <div>
    <h2>{{ serverData.content }}</h2>
    <p>{{ serverData.date }}</p>
    <p>{{ serverData.query}}</p>
    <p>{{ serverData.http}}</p>
  </div>
</template>

<script>
export default {
  name: 'LifeCyclePage',
  layout: 'lifecyle',
  middleware({ store, redirect }) {
    console.log('life cycle :::: middleware');
    // retrieving keys via object destructuring
    // const isAuthenticated = store.state.authenticated
    // if (!isAuthenticated) {
    //   return redirect('/login')
    // }
  },
  async asyncData({ query, params, $http, error }) {
    console.log('life cycle :::: asyncData');
    try {
      const serverData = {
        content: 'life cyle page content',
        date: Date.now(),
        query: query,
        http: $http,
      };
      return { serverData }
    } catch (e) {
      console.log(e);
      error(e) 
    }
  },
  beforeMount () {
    console.log('life cycle :::: beforeMount');
  },
  mounted () {
    console.log('life cycle :::: mounted');
  }
}
</script>
