import AuthRepository from "./AuthRepository";
import TransactionRepository from "./TransactionRepository";
import AddressRepository from "./AddressRepository";

export default ($axios) => ({
  auth: AuthRepository($axios),
  transactions: TransactionRepository($axios),
  address: AddressRepository($axios)
})