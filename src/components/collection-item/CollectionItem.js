import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../costom-button/CustomButton";
import { connect } from "react-redux";
import { AddItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, AddItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => AddItem(item)}>
        {" "}
        Add To Cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
