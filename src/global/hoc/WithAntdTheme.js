import { ConfigProvider } from "antd";
import antdVariables from "styles/antd/variables.json";
import React from "react";

const WithAntdTheme = ({ children }) => {
  return (
    <ConfigProvider theme={{ token: antdVariables }}>{children}</ConfigProvider>
  );
};

export default WithAntdTheme;
