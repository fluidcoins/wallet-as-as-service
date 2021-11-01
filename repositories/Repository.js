import AuthRepository from "./AuthRepository";
import TransactionRepository from "./TransactionRepository";
import AddressRepository from "./AddressRepository";
import CurrencyRepository from "./CurrencyRepository";

export default ($axios) => ({
  auth: AuthRepository($axios),
  transactions: TransactionRepository($axios),
  address: AddressRepository($axios),
  currency: CurrencyRepository($axios)
})