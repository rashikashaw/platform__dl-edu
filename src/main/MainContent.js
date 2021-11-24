import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Route } from "react-router-dom";
import Box from "@mui/material/Box";

import LearningModule from "../modules/LearningModule";
import LearningModuleList from "../modules/LearningModuleList";
import LegacyLearnList from "../legacyLearn/LegacyLearnList";
import SideNav from "./SideNav";

const drawerWidth = 368;

function MainContent() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    marginBottom:"411px",
    backgroundColor:"#ffffff",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth/10}px`,
    marginBottom:"411px",
    backgroundColor:"#ffffff",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);// The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.

  

  return (
    <Box sx={{ display: "flex" }}>
        <SideNav
        theme={theme}
        checkOpen={open}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
      />
      <Main open={open}>
        <Route path={`/main-content/legacy-learn/:tab`}>
          <LegacyLearnList />
        </Route>
        <Route path={`/main-content/learning-modules/:category`}>
          <LearningModuleList />
        </Route>
        <Route path={`/main-content/learning-module/:moduleId`}>
          <LearningModule />
        </Route>
      </Main>
    </Box>
  );
}

export default MainContent;
