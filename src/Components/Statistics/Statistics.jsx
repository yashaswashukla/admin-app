import React from "react";
import css from "./Statistics.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import { groupNumber } from "../../data/data";
import StatisticalChart from "../StatisticalChart/StatisticalChart";
export default function Statistics() {
  return (
    <div className={`${css.container} theme-container`}>
      <span className={css.title}>Overview</span>

      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.arrowIcon}>
            <BsArrowUpShort size={30} />
          </div>

          <div className={css.card}>
            <span>Top item this month</span>
            <span>Office Comps</span>
          </div>

          <div className={css.card}>
            <span>Items</span>
            <span>{groupNumber(234)}</span>
          </div>

          <div className={css.card}>
            <span>Profit</span>
            <span>$ {groupNumber(37000)}</span>
          </div>

          <div className={css.card}>
            <span>Daily Average</span>
            <span>$ {groupNumber(56377)}</span>
          </div>
        </div>
      </div>

      <StatisticalChart />
    </div>
  );
}
