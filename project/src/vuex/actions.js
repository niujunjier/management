export const setTitle = ({ commit }, param) => {
    console.log(param)
    commit('setTitle', param);
}