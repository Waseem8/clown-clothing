import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selecter";
import CartItems from "../cart-items/CartItems";
import CustomButton from "../costom-button/CustomButton";
import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHACKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
