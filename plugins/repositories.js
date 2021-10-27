import createRepository from "~/repositories/Repository";

export default (context, inject) => {
  inject('api', createRepository(context.$axios))
}