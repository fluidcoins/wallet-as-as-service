const resource = '/currencies';

export default ($axios) => ({
  all(){
    return $axios.get(`${resource}?test_net_only=true`)
  }
})