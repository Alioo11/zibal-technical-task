import { ChangeEventHandler, FC } from "react";
import { Button, Flex, Input, Typography } from "antd";
import { Else, If, Then } from "../../kits/ConditonalRendering";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";

import useToggle from "@/hooks/useToggle";
import { purple } from "@ant-design/colors";
import { NoneToVoidFunction } from "ts-wiz";

interface TransactionTableHeaderSearchBoxProps {
  title: string;
  inputValue: string | number;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onClear?: NoneToVoidFunction;
  type: string;
}

const TransactionTableHeaderSearchBox: FC<TransactionTableHeaderSearchBoxProps> = (props) => {
  const { title, inputValue, onInputChange, type, onClear } = props;

  const [searchMode, toggleSearchMode] = useToggle(false);

  const handleClear = () => {
    if (onClear) {
      onClear();
      toggleSearchMode();
    }
  };

  return (
    <Flex gap="small" style={{ maxWidth: 200 }}>
      <If condition={searchMode}>
        <Then>
          <Flex>
            <Input
              type={type}
              size="small"
              value={inputValue}
              onChange={onInputChange}
              addonAfter={onClear ? <CloseOutlined style={{ cursor: "pointer" }} onClick={handleClear} /> : null}
            />
          </Flex>
        </Then>
        <Else>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={toggleSearchMode}
            size="small"
            style={{ backgroundColor: purple[5] }}
          />
          <Typography>{title}</Typography>
        </Else>
      </If>
    </Flex>
  );
};

export default TransactionTableHeaderSearchBox;
