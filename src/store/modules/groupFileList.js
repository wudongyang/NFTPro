const state = {
  groupFileList: []
};

const mutations = {
  set: (state, data) => {
    state.groupFileList = data;
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
