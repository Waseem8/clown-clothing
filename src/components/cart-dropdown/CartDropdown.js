import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selecter";
import CartItems from "../cart-items/CartItems";
import CustomButton from "../costom-button/CustomButton";
import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, dispatch, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toogleCartHidden());
        }}
      >
        GO TO CHACKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
