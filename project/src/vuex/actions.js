// 设置标题
export const setTitle = ({ commit }, param) => {
    console.log(param)
    commit('setTitle', param);
}
// 设置批量操作数据
export const setBatch = ({ commit }, param) => {
    console.log(param)
    commit('setBatch', param);
}
//搜索参数
export const setSearch = ({ commit }, param) => {
    console.log(param)
    commit('setSearch', param);
}