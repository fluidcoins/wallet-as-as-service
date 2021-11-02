const resource = '/address'

export default ($axios) => ({
  all(params){
    return $axios.get(resource, {params})
  },
  create(payload){
    return $axios.post(resource, payload)
  }
})