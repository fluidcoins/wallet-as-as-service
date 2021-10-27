export default (context) => ({
  getAxiosErrorResponse(error) {
    // err.response is set for axios errors
    if (error.response && error.response.data) {
      return error.response.data;
    }

    return { message: error.message, data: undefined };
  },
  setCookie(key, value, option) {
    if (process.env.FLUIDCOINS_ENV === "development") {
      const opts = {
        ...option,
        secure: true,
        sameSite: "strict",
        path: "/",
      };
      context.$cookiz.set(key, value, opts);
    }
  },
  copy(value){
    context.app.$clipboard(value)
    context.app.$toast.info('Copied to clipboard!')
  },

});