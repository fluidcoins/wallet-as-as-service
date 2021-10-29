const resource = '/transactions';

export default ($axios) => ({
  all(params) {
    return $axios.get(`${resource}`, {params})
  },
  get(id) {
    return $axios.get(`${resource}/${id}`)
  }
})