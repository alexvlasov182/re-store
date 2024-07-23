import React from "react";

import "./shopping-cart-table.css";
import { connect } from "react-redux";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tbody key={id}>
        <tr key={id}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>{count}</td>
          <td>${total}</td>

          <td>
            <button
              onClick={() => onDelete(id)}
              className="btn btn-outline-danger btn-sm float-right"
            >
              <i className="fa fa-trash-o" />
            </button>
            <button
              onClick={() => onIncrease(id)}
              className="btn btn-outline-success btn-sm float-right"
            >
              <i className="fa fa-plus-circle" />
            </button>
            <button
              onClick={() => onDecrease(id)}
              className="btn btn-outline-warning btn-sm float-right"
            >
              <i className="fa fa-minus-circle" />
            </button>
          </td>
        </tr>
      </tbody>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>My next Book</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {items.map(renderRow)}
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`Increase ${id}`);
    },
    onDecrease: (id) => {
      console.log(`Decrease ${id}`);
    },
    onDelete: (id) => {
      console.log(`Delete ${id}`);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
