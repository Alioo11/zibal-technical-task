import { BadgeProps } from "antd";
import { Dictionary } from "ts-wiz";

const paymentStatusMap: Dictionary<{
  title: string;
  status: BadgeProps["status"];
}> = {
  "1": { title: "پرداخت موفق ", status: "success" },
  "2": { title: "پرداخت نا‌موفق ", status: "error" },
};

export default paymentStatusMap;
