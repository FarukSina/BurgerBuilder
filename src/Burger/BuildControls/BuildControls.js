import React from "react";
import classes from "../BuildControls/BuildControls.module.css";
import BuildControl from "../BuildControls/BuildControl/BuildControl";

const BuildControls = props => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
  ];
  return (
    <div className={classes.BuildControls}>
      <span className={classes.Price}>
        Total Prices : <strong>${props.totalPrice.toFixed(2)}</strong>
      </span>
      {controls.map(ctrl => (
        <BuildControl
          label={ctrl.label}
          key={ctrl.label}
          ingredientCount={props.ingredients[ctrl.type]}
          added={() => props.ingredientsAdded(ctrl.type)}
          removed={() => props.ingredientsRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        onClick={props.ordered}
        className={classes.OrderButton}
        disabled={!props.disable}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default BuildControls;
