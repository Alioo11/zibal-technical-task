import paymentStatusMap from "@/configs/transaction";
import { Transaction } from "@/types/transaction";
import { Badge, Flex, Typography } from "antd";
import type { FC } from "react";

const TransactionTablePaymentStatus: FC<{ status: Transaction["status"] }> = (
  props
) => {
  const { status } = props;

  const paymentConfig = paymentStatusMap[status];

  return (
    <Flex dir="row">
      <Badge status={paymentConfig.status} text={paymentConfig.title} />
    </Flex>
  );
};

export default TransactionTablePaymentStatus;
