import { AVAILABLE_NETWORKS } from "./constants";

export default (context) => ({
  getAxiosErrorResponse(error) {
    // err.response is set for axios errors
    if (error.response && error.response.data) {
      return error.response.data;
    }

    return { message: error.message, data: undefined };
  },
  copy(value){
    context.app.$clipboard(value)
    context.app.$toast.info('Copied to clipboard!')
  },
  validateNetwork(network) {
    if(!network){
      return 'Not Available'
    }
    return AVAILABLE_NETWORKS.includes(network.toLowerCase()) ? network : 'Not Available'
  }
});