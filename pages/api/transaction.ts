import data from "@/data/transactions";
import type { Transaction } from "@/types/transaction";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse<Array<Transaction>> }res
 *
 * @description dummy api to return mock transaction data :)
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Transaction>>
) {
  const { trackId, cardNumber } = req.query;

  console.log(trackId , cardNumber)

  const filteredTransactionData = data.filter((dataEntry) => {
    const trackIdMatch =
      !trackId || dataEntry.trackId.toString().includes(trackId.toString());
    const cardNumberMatch =
      !cardNumber || dataEntry.cardNumber.includes(cardNumber.toString());
    return trackIdMatch && cardNumberMatch;
  });

  res.status(200).json(filteredTransactionData);
}
