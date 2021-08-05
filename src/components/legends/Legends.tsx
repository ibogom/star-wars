import React from "react";
import { Typography, Breadcrumb, Row, Col } from "antd";
import { useLegends } from "hooks/useLegendsRequests";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ItemsList, AddToFavoritesButton } from "common";
import moment from "moment";

const { Link, Text, Title } = Typography;

const Legends = () => {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("legends.table.name.title"),
      dataIndex: "name",
      render: ({ name, path }: { name: string; path: number }) => (
        <Link data-testid={`name-${path}`} href={`/people/${path}`}>
          {name}
        </Link>
      ),
    },
    {
      title: t("legends.table.gender.title"),
      dataIndex: "gender",
      render: (gender: string) => <Text>{gender}</Text>,
      responsive: ["md"],
    },
    {
      title: t("legends.table.height.title"),
      dataIndex: "height",
      render: (height: string) => <Text>{height}</Text>,
      responsive: ["md"],
    },
    {
      title: t("legends.table.mass.title"),
      dataIndex: "mass",
      render: (mass: string) => <Text>{mass}</Text>,
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
            <title>{t("breadcrumb.legends")}</title>
            <link rel="canonical" href={`${window.location.href}`} />
          </Helmet>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="">{t("breadcrumb.home")}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("breadcrumb.legends")}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Title data-testid="legends-title" level={1}>
        {t("legends.title")}
      </Title>
      <Row>
        <Col span={24}>
          <ItemsList columns={columns} useAction={useLegends} />
        </Col>
      </Row>
    </>
  );
};

export default Legends;
