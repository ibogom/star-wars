import React from "react";
import { Row, Col, Breadcrumb } from "antd";
import { useLegend } from "hooks/useLegendsRequests";
import { Link } from "react-router-dom";
import { Item } from "common";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Legend = () => {
  const { t } = useTranslation();

  return (
    <Row>
      <Col span={24}>
        <Item useAction={useLegend}>
          {(item) => (
            <Row className="breadcrumb_container">
              <Col span={24}>
                <Helmet>
                  <title>{t("breadcrumb.legend", { name: item.name })}</title>
                  <link rel="canonical" href={`${window.location.href}`} />
                </Helmet>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link to="">{t("breadcrumb.home")}</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link to="/people">{t("breadcrumb.legends")}</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {t("breadcrumb.legend", { name: item.name })}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          )}
        </Item>
      </Col>
    </Row>
  );
};

export default Legend;
