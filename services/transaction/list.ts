import { Transaction } from "@/types/transaction";
import axios from "axios";
import { Maybe, Nullable } from "ts-wiz";

interface transactionListParams {
  trackId?: Nullable<Transaction["trackId"]>;
  cardNumber?: Transaction["cardNumber"];
}

const getTransactionList = async (
  params: transactionListParams = {}
): Promise<Array<Transaction>> => {
  const response = await axios.get<Array<Transaction>>("api/transaction", {
    method: "GET",
    params: params,
  });

  return response.data;
};

export default getTransactionList;
