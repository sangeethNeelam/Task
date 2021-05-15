// @flow
import React, { useState } from "react";
import type { Node } from "react";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { navigate } from "@reach/router";
import Collapse from "@material-ui/core/Collapse";

//Local Imports
import { useAtom } from "@/Components/Atom";
// import { PanelItem } from "@/Components";
import logo from "@/Assets/logo.png";
import pdfFile from "@/Assets/2021 Capability Statement v7.pdf";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  // Add your styles here

  lists: {
    display: "flex",
    justifyContent: "space-between",
    color: "blue",
  },
  icons: {
    color: "blue",
    marginLeft: "103%",
    fontSize: 12,
    cursor: "pointer",
    marginTop: "-6px",
  },
  name: {
    cursor: "pointer",
    padding: 5,
  },
  subtext: {
    position: "absolute",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 5,
    border: "1px solid #cccccc57",
    width: 300,
    "&.MuiTypography-displayBlock": {
      fontSize: 12,
    },
  },
  capabilitytext: {
    textDecoration: "none",
    color: "#000",
  },
}));

type Props = {};

export const Header = (props: Props): Node => {
  const classes = useStyles();
  const { Layout } = useAtom();

  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <React.Fragment>
      <Box>
        <List className={classes.lists}>
          <Box mr="10%">
            <img alt="logo" src={logo} />
          </Box>
          {_.map(props.options, (item, index) => {
            return (
              <List>
                <ListItem className={classes.options} key={index}>
                  <Box>
                    <Box
                      className={classes.name}
                      onClick={() => {
                        navigate(item.path);
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </Box>
                    <Box mt="-26px">
                      <ListItemIcon
                        className={classes.icons}
                        onClick={() => {
                          handleClick(index, item);
                        }}
                      >
                        {selectedIndex === index
                          ? item.ExpandLess
                          : item.ExpandMore}
                      </ListItemIcon>
                    </Box>
                  </Box>
                </ListItem>
                <Collapse
                  in={index === selectedIndex}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    className={classes.subtext}
                  >
                    {_.map(item.items, (sub, index) => {
                      return (
                        <ListItem
                          button
                          style={{ fontSize: 12 }}
                          onClick={() => {
                            <div>
                              {setSelectedIndex("")}, {navigate(sub.path)}
                            </div>;
                          }}
                        >
                          <ListItemText
                            primary={
                              sub.label === "Capability Statement" ? (
                                <a
                                  href={pdfFile}
                                  target="_blank"
                                  className={classes.capabilitytext}
                                >
                                  Capability Statement
                                </a>
                              ) : (
                                sub.label
                              )
                            }
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </List>
            );
          })}
        </List>
      </Box>
    </React.Fragment>
  );
};
