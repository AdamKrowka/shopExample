import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemText primary="Shirts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Dresses" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Jeans" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Skinny" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Relaxed" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Bootcut" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Stright" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemText primary="Jackets" />
      </ListItem>
    </List>
  );
}
