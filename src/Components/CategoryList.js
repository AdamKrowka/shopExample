import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    marginLeft: theme.spacing(4),
    "&:hover": {
      backgroundColor: "#ccc",
    },
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#ccc",
    },
  },
}));

const ListElement = ({
  name,
  nested,
  selected,
  setSelected,
  index,
  parentIndex,
}) => {
  const classes = useStyles();
  const setSelect = () => {
    nested
      ? setSelected({ first: parentIndex, second: index })
      : setSelected({ second: null, first: index });
  };
  return (
    <ListItem
      className={nested ? classes.nested : classes.listItem}
      button
      onClick={setSelect}
    >
      {nested ? (
        selected.second === index && selected.first === parentIndex ? (
          <ArrowForwardIosIcon />
        ) : null
      ) : selected.first === index ? (
        <ArrowForwardIosIcon />
      ) : null}
      <ListItemText primary={name} />
    </ListItem>
  );
};

const CategoryElement = ({
  open,
  setOpen,
  children,
  selected,
  setSelected,
  index,
}) => {
  const classes = useStyles();
  const handleClick = () => {
    setOpen(index);
  };

  return (
    <>
      <ListItem className={classes.listItem} button onClick={handleClick}>
        {selected.first === index ? <ArrowForwardIosIcon /> : null}
        <ListItemText primary={children[0]} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, subIndex) =>
            subIndex ? (
              <ListElement
                key={`${children[0]}${subIndex}`}
                name={child}
                nested
                index={subIndex}
                selected={selected}
                setSelected={setSelected}
                parentIndex={index}
              />
            ) : null
          )}
        </List>
      </Collapse>
    </>
  );
};
export default ({ open, setOpen, selected, setSelected, categoryList }) => {
  const changeOpen = (index) => {
    setOpen({ ...open, [`open${index}`]: !open[`open${index}`] });
  };
  return categoryList.map((element, index) =>
    Array.isArray(element) ? (
      <CategoryElement
        setOpen={changeOpen}
        open={open[`open${index}`]}
        key={index}
        children={element}
        selected={selected}
        setSelected={setSelected}
        index={index}
      />
    ) : (
      <ListElement
        key={index}
        name={element}
        selected={selected}
        setSelected={setSelected}
        index={index}
      />
    )
  );
};
