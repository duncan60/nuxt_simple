import Vuex from 'vuex';
new Vuex.Store({
	state: () => ({}),
  mutations: {},
  actions: {
    nuxtServerInit ({ commit }, { req }) {
      console.log('store action nuxtServerInit');
      // if (req.session.user) {
      //   commit('user', req.session.user)
      // }
    }
  },
	modules: {
		todos: {
		  namespaced: true,
		  state: () => ({}),
		  mutations: {},
		  actions: {
				nuxtServerInit ({ commit }, { req }) {
				  console.log('modules actions nuxtServerInit');
				}
			}
		}
	}
})