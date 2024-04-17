import { Button, Flex, Typography } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { purple } from "@ant-design/colors";
import type { FC } from "react";
import type { Transaction } from "@/types/transaction";

const TransactionTableTrackId: FC<{ trackId: Transaction["trackId"] }> = (props) => {
  const { trackId } = props;

  const handleCopyTrackId = () => {
    navigator.clipboard.writeText(trackId.toString());
  };

  return (
    <Flex gap={3}>
      <Typography>{trackId}</Typography>
      <Button
        size="small"
        type="text"
        onClick={handleCopyTrackId}
        icon={<CopyOutlined style={{ color: purple[3] }} />}
      />
    </Flex>
  );
};

export default TransactionTableTrackId;