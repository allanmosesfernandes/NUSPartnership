import "./src/styles/global.css";
import React from "react";
import Layout from "./src/components/layout";

// eslint-disable-next-line import/prefer-default-export
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading, react/jsx-filename-extension
  return <Layout {...props}>{element}</Layout>;
}
