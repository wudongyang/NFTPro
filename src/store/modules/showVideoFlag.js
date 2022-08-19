const state = {
  showVideoFlag: false
};

const mutations = {
  set: (state, data) => {
    state.showVideoFlag = data;
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
