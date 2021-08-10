import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Typography, Card } from "antd";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import StarshipPng from "./img/starship.png";
import PersonPng from "./img/person.png";
import PlanetPng from "./img/planet.png";

import styles from "./Home.module.scss";

const { Title } = Typography;

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>{t("breadcrumb.home")}</title>
        <link rel="canonical" href={`${window.location.href}`} />
      </Helmet>
      <Row>
        <Col span={24}>
          <Title className={styles.title} level={1}>
            {t("main.title")}
          </Title>
        </Col>
      </Row>
      <Row className={styles.cards}>
        <Col>
          <Link to="/people">
            <Card
              hoverable
              className={styles.card}
              title={t("main.cards.legends")}
              cover={<img src={PersonPng} alt="star wars person" />}
            />
          </Link>
        </Col>
        <Col>
          <Link to="/planets">
            <Card
              hoverable
              className={styles.card}
              title={t("main.cards.planets")}
              cover={<img src={PlanetPng} alt="star wars planet" />}
            />
          </Link>
        </Col>
        <Col>
          <Link to="/starships">
            <Card
              hoverable
              className={styles.card}
              title={t("main.cards.starships")}
              cover={<img src={StarshipPng} alt="star wars starship" />}
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
