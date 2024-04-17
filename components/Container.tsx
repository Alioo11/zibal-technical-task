import React from "react";
import { Flex } from "antd";
import type { HOCFunctionalComponent } from "@/types/component";

const Container: HOCFunctionalComponent = ({ children }) => (
  <Flex style={{ maxWidth: 1200, width: "90%", margin: "1rem auto" }}>
    {children}
  </Flex>
);

export default Container;
