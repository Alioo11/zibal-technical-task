import { Typography } from "antd";
import moment from "moment-jalaali";
import type { FC } from "react";
import type { Transaction } from "@/types/transaction";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const TransactionTablePaidAt: FC<{ date: Transaction["paidAt"] }> = (props) => {
  const { date } = props;

  const parsedDate = moment(date, "jYYYY/jMM/jDD-HH:mm:ss");

  return <Typography>{parsedDate.format("jDD jMMMM jYYYY HH:mm")}</Typography>;
};

export default TransactionTablePaidAt;
