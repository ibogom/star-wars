import React, { memo, ReactChildren, ReactElement } from "react";
import cn from "classnames";
import { Card, Col, List, Row, Typography, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useParams, NavLink } from "react-router-dom";
import { LegendResponse, StarshipResponse, PlanetResponse } from "api/types";
import { Loader } from "common";
import { AddToFavoritesButton } from "common";
import moment from "moment";

import styles from "./Item.module.scss";

const { Text } = Typography;

type ItemProps = {
  useAction: (
    id: string
  ) => LegendResponse | StarshipResponse | PlanetResponse | null;
  children?: (
    item: LegendResponse | StarshipResponse | PlanetResponse
  ) => ReactElement<any, any> | ReactChildren;
};

const Item = ({ useAction, children }: ItemProps) => {
  const { id } = useParams<{ id: string }>();

  const item = useAction(id);

  if (!item) {
    return <Loader />;
  }

  const renderlinks = (links: string[]) => {
    return (
      <div className={styles.links}>
        {links.map((link: string, idx: number) => {
          const href = link.replace("https://swapi.dev/api/", "/");
          return (
            <NavLink
              data-testid={`link-${href.replace("/", "")}`}
              key={idx}
              to={href}
            >
              {href.replace("/", "")}
            </NavLink>
          );
        })}
      </div>
    );
  };

  const renderItem = (
    item: { key: string; value: string | string[] },
    itemIndex: number
  ) => {
    let value: string | string[] | JSX.Element | moment.Moment = item.value;

    if (Array.isArray(item.value)) {
      value = renderlinks(item.value);
    }

    if (item.key === "created" || item.key === "edited") {
      value = moment(item.value).format("MMM Do YY");
    }

    return (
      <List.Item key={itemIndex}>
        <Row className={styles.item}>
          <Col data-testid={item.key} className={cn(styles.col, styles.key)}>
            {item.key}
          </Col>
          <Col
            data-testid={`${item.key}-value`}
            className={cn(styles.col, styles.value)}
          >
            {value}
          </Col>
        </Row>
      </List.Item>
    );
  };

  const dataSource = Object.keys(item).reduce(
    (memo: any[], current: string) => {
      // @ts-ignore
      const value = item[current];
      return [
        ...memo,
        {
          key: current,
          value,
        },
      ];
    },
    []
  );

  return (
    <span>
      {typeof children === "function" ? children(item) : children}
      <Card
        className={styles.wrapper}
        title={
          <span>
            <Button
              className={styles.back}
              icon={<LeftOutlined />}
              onClick={() => history.back()}
            />
            <Text data-testid="legend-title">{item.name}</Text>
          </span>
        }
        extra={<AddToFavoritesButton id={item.id} />}
      >
        <List
          size="large"
          dataSource={dataSource}
          pagination={false}
          renderItem={renderItem}
          className={styles.list}
        />
      </Card>
    </span>
  );
};

export default memo(Item);
