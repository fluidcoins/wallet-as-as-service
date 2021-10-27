import { LOGOUT } from "~/services/actionTypes";

export default function ({ app, store, route, redirect }) {
  const { loggedIn } = store.getters
  const { path } = route
  const redirectPath = path === '/' ? '' : path
  const currentQueryParam = {}
  currentQueryParam.redirectTo = redirectPath

  if (!loggedIn) {
    store.dispatch(LOGOUT)
    return redirect('/', currentQueryParam)
  }
}