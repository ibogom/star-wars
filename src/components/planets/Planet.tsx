import React from "react";
import { Row, Col, Breadcrumb } from "antd";
import { usePlanet } from "hooks/usePlanetsRequests";
import { NavLink } from "react-router-dom";
import { Item } from "common";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Planet = () => {
  const { t } = useTranslation();

  return (
    <Row>
      <Col span={24}>
        <Item useAction={usePlanet}>
          {(item) => (
            <Row className="breadcrumb_container">
              <Col span={24}>
                <Helmet>
                  <title> {t("breadcrumb.planet", { name: item.name })}</title>
                  <link rel="canonical" href={`${window.location.href}`} />
                </Helmet>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <NavLink to="">{t("breadcrumb.home")}</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink to="/planets">{t("breadcrumb.planets")}</NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {t("breadcrumb.planet", { name: item.name })}
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

export default Planet;
