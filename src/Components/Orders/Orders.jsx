import React from "react";
import css from "./Orders.module.css";
import { groupNumber, ordersData } from "../../data/data";
import OrdersPieChart from "../OrdersPieChart/OrdersPieChart";

export default function Orders() {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img src="./logo.png" alt="" />
        <span>Orders Today</span>
      </div>

      <div className={`${css.stat} grey-container`}>
        <span>Amount</span>
        <span>$ {groupNumber(1249)}</span>
      </div>

      <div className={css.orders}>
        {ordersData.map((order, i) => {
          return (
            <div key={i} className={css.order}>
              <div>
                <span>{order.name}</span>
                <span>{order.change}</span>
              </div>
              <div>
                <span>{order.type}</span>
                <span>{order.items}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={css.ordersChars}>
        <span>Split By orders</span>
        <OrdersPieChart />
      </div>
    </div>
  );
}
