import { useEffect, useState } from "react";
import Container from "@/components/Container";
import TransactionTableHeaderSearchBox from "@/components/Transaction/Table/HeaderSearchBox";
import TransactionTablePaidAt from "@/components/Transaction/Table/PaidAt";
import TransactionTablePaymentStatus from "@/components/Transaction/Table/PaymentStatus";
import TransactionTableTrackId from "@/components/Transaction/Table/TrackId";
import { Table, TableProps, Typography } from "antd";
import PriceHelper from "@/helpers/price";
import textHelper from "@/helpers/text";
import TransactionService from "@/services/transaction";
import type { Transaction } from "@/types/transaction";
import type { Nullable } from "ts-wiz";
import useToggle from "@/hooks/useToggle";

let timeoutRef: Nullable<NodeJS.Timeout> = null;

const TransactionPage = () => {
  const [trackIdSearch, setTrackIdSearch] = useState<Nullable<Transaction["trackId"]>>(null);
  const [cardNumberSearch, setCardNumberSearch] = useState<Transaction["cardNumber"]>("");

  const [transactionData, setTransactionData] = useState<Array<Transaction>>([]);

  const handleGetTransactionData = async () => {
    const transactionData = await TransactionService.list({
      trackId: trackIdSearch,
      cardNumber: cardNumberSearch,
    });
    setTransactionData(transactionData);
  };

  const columns: TableProps<Transaction>["columns"] = [
    {
      title: (
        <TransactionTableHeaderSearchBox
          type="number"
          inputValue={trackIdSearch || ""}
          onInputChange={(e) => {
            const { value } = e.target;
            setTrackIdSearch(value ? Number(value) : null);
          }}
          title="شماره تراکنش"
        />
      ),
      dataIndex: "trackId",
      key: "trackId",
      render: (data) => <TransactionTableTrackId trackId={data} />,
      width: 200,
    },
    {
      title: "وضعیت تراکنش",
      dataIndex: "status",
      key: "status",
      render: (data) => <TransactionTablePaymentStatus status={data} />,
    },
    {
      title: "تاریخ پرداخت",
      dataIndex: "paidAt",
      key: "paidAt",
      render: (data) => <TransactionTablePaidAt date={data} />,
    },
    {
      title: "مبلغ",
      dataIndex: "amount",
      key: "amount",
      render: (data) => (
        <Typography>{textHelper.toPersianDigits(PriceHelper.format(data, { unit: "ریال" }))}</Typography>
      ),
    },
    {
      title: (
        <TransactionTableHeaderSearchBox
          title="شماره کارت"
          type="string"
          inputValue={cardNumberSearch}
          onInputChange={(e) => setCardNumberSearch(e.target.value)}
        />
      ),
      dataIndex: "cardNumber",
      key: "cardNumber",
      width: 300,
      render: (data) => <Typography>{textHelper.toPersianDigits(data)}</Typography>,
    },
  ];

  useEffect(() => {
    timeoutRef = setTimeout(handleGetTransactionData, 1000);
    return () => {
      if (timeoutRef) clearTimeout(timeoutRef);
    };
  }, [, trackIdSearch, cardNumberSearch]);

  return (
    <Container>
      <Table style={{ width: "100%" }} columns={columns} dataSource={transactionData} pagination={false} />
    </Container>
  );
};

export default TransactionPage;
