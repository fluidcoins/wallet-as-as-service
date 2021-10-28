const resource = '/auth'

export default () => ({
  login(payload) {
    return $axios.post(`${resource}/login`, payload)
  }
})