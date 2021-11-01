import AuthRepository from "./AuthRepository";
import TransactionRepository from "./TransactionRepository";

export default ($axios) => ({
  auth: AuthRepository($axios),
  transactions: TransactionRepository($axios)
})