<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
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
    console.log('[life cycle] :::: middleware');
    // retrieving keys via object destructuring
    // const isAuthenticated = store.state.authenticated
    // if (!isAuthenticated) {
    //   return redirect('/login')
    // }
  },
  async asyncData({ query, params, $http, error }) {
    console.log('[life cycle] :::: asyncData');
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
  async fetch() {
    this.fetchData = '[fetchOnServer] test fetch';
    console.log('[life cycle] :::: fetch');
  },
  fetchOnServer: true,
  fetchKey(getCounter) {
    console.log('[life cycle] :::: fetchKey');
    return 'fetchKey-counter' + getCounter('sidebar');
  },
  data: () => ({
    fetchData: null,
  }),
  beforeMount () {
    console.log('[life cycle] :::: beforeMount');
  },
  mounted () {
    console.log('[life cycle] :::: mounted ,local data :', this.fetchData);
    console.log('_fetchKey:', this._fetchKey);
    console.log('this.$fetchState:', this.$fetchState);
  }
}
</script>
