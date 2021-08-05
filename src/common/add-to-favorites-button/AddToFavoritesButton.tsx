import React, { useState, memo } from "react";
import { Button } from "antd";
import { useAppContext } from "context/AppContext";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "store/constants";

const AddToFavoritesButton = ({ id }: { id: string }) => {
  const { state, dispatch } = useAppContext();
  const isFavorite = state.favorites.includes(id);
  const [selected, setSelected] = useState(isFavorite);

  const toggleFavorite = () => {
    const updatedData = !selected;
    setSelected(updatedData);
    dispatch({
      type: updatedData ? ADD_TO_FAVORITES : DELETE_FROM_FAVORITES,
      payload: {
        id,
      },
    });
  };

  return (
    <Button
      data-testid={`action-${id}`}
      type="default"
      onClick={toggleFavorite}
      icon={
        selected ? (
          <HeartFilled data-testid={`checked-${id}`} />
        ) : (
          <HeartOutlined data-testid={`unchecked-${id}`} />
        )
      }
    />
  );
};

export default memo(AddToFavoritesButton);
