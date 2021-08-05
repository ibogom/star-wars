import React from "react";
import { Row, Col, Breadcrumb } from "antd";
import { useStarship } from "hooks/useStarshipsRequests";
import { NavLink } from "react-router-dom";
import { Item } from "common";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Starship = () => {
  const { t } = useTranslation();

  return (
    <Row>
      <Col span={24}>
        <Item useAction={useStarship}>
          {(item) => (
            <Row className="breadcrumb_container">
              <Col span={24}>
                <Helmet>
                  <title>{t("breadcrumb.starship", { name: item.name })}</title>
                  <link rel="canonical" href={`${window.location.href}`} />
                </Helmet>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <NavLink to="">{t("breadcrumb.home")}</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="/starships">
                      {t("breadcrumb.starships")}
                    </NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {t("breadcrumb.starship", { name: item.name })}
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

export default Starship;
