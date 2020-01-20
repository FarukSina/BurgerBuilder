import React from "react";
import classes from "./Layout.module.css";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const layout = props => (
  <>
    <ToolBar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </>
);
export default layout;
