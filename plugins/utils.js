import utils from "~/services/utils"

export default (context, inject) => {
  inject('utils', utils(context))
}