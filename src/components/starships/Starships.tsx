import React from "react";
import { Breadcrumb, Col, Row, Typography } from "antd";
import { useStarships } from "hooks/useStarshipsRequests";
import { useTranslation } from "react-i18next";
import { ItemsList, AddToFavoritesButton } from "common";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

import moment from "moment";

const { Link, Text, Title } = Typography;

const Starships = () => {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("starships.table.name.title"),
      dataIndex: "name",
      render: ({ name, path }: { name: string; path: number }) => (
        <Link href={`/starships/${path}`}>{name}</Link>
      ),
    },
    {
      title: t("starships.table.model.title"),
      dataIndex: "model",
      render: (model: string) => <Text>{model}</Text>,
      responsive: ["md"],
    },
    {
      title: t("starships.table.manufacturer.title"),
      dataIndex: "manufacturer",
      render: (manufacturer: string) => <Text>{manufacturer}</Text>,
      responsive: ["md"],
    },
    {
      title: t("starships.table.length.title"),
      dataIndex: "length",
      render: (length: string) => <Text>{length}</Text>,
      responsive: ["md"],
    },
    {
      title: t("starships.table.crew.title"),
      dataIndex: "crew",
      render: (crew: string) => <Text>{crew}</Text>,
      responsive: ["md"],
    },
    {
      title: t("starships.table.passengers.title"),
      dataIndex: "passengers",
      render: (passengers: string) => <Text>{passengers}</Text>,
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
            <title>{t("breadcrumb.starships")}</title>
            <link rel="canonical" href={`${window.location.href}`} />
          </Helmet>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="">{t("breadcrumb.home")}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("breadcrumb.starships")}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Title level={1}>{t("starships.title")}</Title>
      </Row>
      <Row>
        <Col span={24}>
          <ItemsList columns={columns} useAction={useStarships} />
        </Col>
      </Row>
    </>
  );
};

export default Starships;
