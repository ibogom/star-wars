import React, { ReactComponentElement, useState, memo, useEffect } from "react";
import { Table } from "antd";
import { Loader } from "common";

import { LegendsResponse, PlanetsResponse, StarshipsResponse } from "api/types";

type ColumnProps = {
  title: string;
  dataIndex: string;
  render: (props: any) => ReactComponentElement<any>;
};

type ItemsListProps = {
  useAction: (
    page: number
  ) => LegendsResponse | PlanetsResponse | StarshipsResponse | null;
  columns: ColumnProps[];
};

const ItemsList = ({ columns, useAction }: ItemsListProps) => {
  const [page, setPage] = useState(1);
  const items = useAction(page);

  const [loading, setLoading] = useState(!!items);

  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items]);

  if (!items) {
    return <Loader />;
  }

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
    setLoading(true);
  };

  const dataSource = items.results.map(({ id, name, path, ...rest }) => {
    return {
      ...rest,
      key: id,
      id,
      name: { name, path },
    };
  });

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={{
        total: items.count,
        showSizeChanger: false,
        onChange: handlePageChange,
      }}
    />
  );
};

export default memo(ItemsList);
