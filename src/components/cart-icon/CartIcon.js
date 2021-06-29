import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingIcone } from "../../image/shopping-bag.svg";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selecter";

const CartIcon = ({ toogleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toogleCartHidden}>
      <ShoppingIcone className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});
const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
