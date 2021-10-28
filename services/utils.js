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

});