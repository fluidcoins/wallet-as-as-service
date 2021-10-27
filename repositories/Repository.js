import AuthRepository from "./AuthRepository"

export default ($axios) => ({
  auth: AuthRepository($axios)
})