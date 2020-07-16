import React from "react";
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(8),
  },
}));

const ProductTable = ({ cart }) => {
  const classes = useStyles();
  const totalCost = cart
    .reduce(
      (acc, item) =>
        Math.round(+item.product.price.substring(1) * item.amount * 100) / 100 +
        acc,
      0
    )
    .toLocaleString("en", { useGrouping: true });
  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((product, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {product.product.product_name}
              </TableCell>
              <TableCell align="right">{product.amount}</TableCell>
              <TableCell align="right">
                $
                {(
                  Math.round(
                    +product.product.price.substring(1) * product.amount * 100
                  ) / 100
                ).toLocaleString("en", { useGrouping: true })}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <StyledTableCell component="th" scope="row">
              Total
            </StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
            <StyledTableCell align="right">${totalCost}</StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(ProductTable);
