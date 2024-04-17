import React from "react";
import { ConfigProvider } from "antd";
import type { HOCFunctionalComponent } from "@/types/component";

const AntDProvider: HOCFunctionalComponent = ({ children }) => (
  <ConfigProvider direction="rtl">{children}</ConfigProvider>
);

export default AntDProvider;
