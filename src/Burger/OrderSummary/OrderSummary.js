import React from "react";
import Button from "../../components/UI/Button/Button";
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients : </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price</strong> :{" "}
        <span style={{ color: "#005580" }}> {props.price} </span>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};

export default orderSummary;
