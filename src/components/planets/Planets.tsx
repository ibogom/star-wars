import React from "react";
import { Breadcrumb, Col, Row, Typography } from "antd";
import { usePlanets } from "hooks/usePlanetsRequests";
import { useTranslation } from "react-i18next";
import { ItemsList, AddToFavoritesButton } from "common";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import moment from "moment";

const { Link, Text, Title } = Typography;

const Planets = () => {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("planets.table.name.title"),
      dataIndex: "name",
      render: ({ name, path }: { name: string; path: number }) => (
        <Link href={`/planets/${path}`}>{name}</Link>
      ),
    },
    {
      title: t("planets.table.diameter.title"),
      dataIndex: "diameter",
      render: (diameter: string) => <Text>{diameter}</Text>,
      responsive: ["md"],
    },
    {
      title: t("planets.table.climate.title"),
      dataIndex: "climate",
      render: (climate: string) => <Text>{climate}</Text>,
      responsive: ["md"],
    },
    {
      title: t("planets.table.gravity.title"),
      dataIndex: "gravity",
      render: (gravity: string) => <Text>{gravity}</Text>,
      responsive: ["md"],
    },
    {
      title: t("planets.table.terrain.title"),
      dataIndex: "terrain",
      render: (terrain: string) => <Text>{terrain}</Text>,
      responsive: ["md"],
    },
    {
      title: t("planets.table.surface_water.title"),
      dataIndex: "surface_water",
      render: (surface_water: string) => <Text>{surface_water}</Text>,
      responsive: ["md"],
    },
    {
      title: t("common.table.created.title"),
      dataIndex: "created",
      render: (created: string) => (
        <Text>{moment(created).format("MMM Do YY")}</Text>
      ),
    },
    {
      title: t("common.table.action.title"),
      dataIndex: "id",
      render: (id: string) => <AddToFavoritesButton id={id} />,
    },
  ];

  return (
    <>
      <Row className="breadcrumb_container">
        <Col span={24}>
          <Helmet>
            <title>{t("breadcrumb.planets")}</title>
            <link rel="canonical" href={`${window.location.href}`} />
          </Helmet>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="">{t("breadcrumb.home")}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("breadcrumb.planets")}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Title level={1}>{t("planets.title")}</Title>
      </Row>
      <Row>
        <Col span={24}>
          <ItemsList columns={columns} useAction={usePlanets} />
        </Col>
      </Row>
    </>
  );
};

export default Planets;
