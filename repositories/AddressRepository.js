const resource = '/address'

export default ($axios) => ({
  all(params){
    return $axios.get(resource, {params})
  },
  create(payload){
    return $axios.post(resource, payload)
  },
  get(addressId) {
    return $axios.get(`${resource}/${addressId}`)
  },
  transactions(addressId, params) {
    return $axios.get(`${resource}/${addressId}/transactions`, {params})
  },
})