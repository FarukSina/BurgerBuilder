import React, { useState } from "react";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = () => {
  const [purchasing, setPurchasing] = useState(false);
  const [purchaseable, setPurchaseable] = useState(false);
  const [totalPrice, setTotalPrice] = useState(1);
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });
  console.log("ingredients", ingredients);

  const addIngredientHandler = type => {
    console.log("type", type, ingredients[type]);

    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;
    setTotalPrice(newPrice);
    setIngredients(updatedIngredients);
    checkPurchaseable(updatedIngredients);
  };
  const removeIngredientHandler = type => {
    if (ingredients[type] > 0) {
      const oldCount = ingredients[type];
      const updatedCount = oldCount - 1;
      const updatedIngredients = { ...ingredients };
      updatedIngredients[type] = updatedCount;
      setIngredients(updatedIngredients);
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrices = totalPrice;
      const newPrices = oldPrices - priceAddition;
      setTotalPrice(newPrices);
      checkPurchaseable(updatedIngredients);
    }
  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  const checkPurchaseable = ingredientType => {
    const ingredients = { ...ingredientType };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    const asd = sum > 0;
    setPurchaseable(asd);
    console.log("sum", sum);
  };
  const purchaseHandler = () => {
    setPurchasing(true);
  };
  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };
  const purchaseContinueHandler = () => {
    alert("You Continue!");
  };
  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          purchaseCanceled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
          price={totalPrice}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientsAdded={addIngredientHandler}
        ingredientsRemoved={removeIngredientHandler}
        ingredients={ingredients}
        totalPrice={totalPrice}
        disabled={disabledInfo}
        disable={purchaseable}
        ordered={purchaseHandler}
      />
    </>
  );
};

export default BurgerBuilder;
