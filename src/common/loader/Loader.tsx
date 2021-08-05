import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <Spin size="large" indicator={<LoadingOutlined />} />
    </div>
  );
};

export default Loader;
