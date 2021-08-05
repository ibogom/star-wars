import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";

import styles from "./NotFound.module.scss";

const { Title } = Typography;

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <Title className={styles.title} level={1}>
        {t("404.notFound")}
      </Title>
      <Link to="/">{t("404.home")}</Link>
    </div>
  );
};

export default NotFound;
