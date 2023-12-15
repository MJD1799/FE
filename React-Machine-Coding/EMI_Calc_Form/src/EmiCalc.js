import React, { useCallback, useEffect, useState } from "react";
import TextInput from "./TextInput";
import Slider from "./Slider";
import Button from "./Button";

import useEmi from "./hooks/useEmi";

const months = [12, 24, 36, 48, 60];

const EmiCalc = ({}) => {
  const [cost, setCost] = useState("");
  const [rate, setRate] = useState("");
  const [fee, setFee] = useState("");
  const [tenure, setTenure] = useState("");

  const [downPayment, setDownpayment] = useState("");
  const [loan, setLoan] = useState("");

  const handleClick = useCallback(
    (month) => () => {
      setTenure(month);
    },
    []
  );
  const emi = useEmi({ cost, rate, fee, downPayment, loan, tenure });

  useEffect(() => {
    if (!(cost > 0)) {
      setDownpayment(0);
      setLoan(0);
    }
    setLoan(emi.calculateEmi(downPayment));
  }, [tenure]);
  console.log("emi:", emi);

  const onSubmit = (e) => {
    console.log("e:", e);
    e.preventDefault();
  };
  return (
    <>
      <h1>Calculate EMI</h1>
      <form className="formWrapper" onSubmit={onSubmit}>
        <section className="inputField">
          <TextInput
            name="P"
            label={"Total Cost of Asset"}
            id="P"
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <TextInput
            label={"Interest Rate (in %)"}
            id="IR"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <TextInput
            label={"Processing Fee (in %)"}
            id="PF"
            type="number"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
        </section>
        <section className="downpayment">
          <h3>Down Payment</h3>
          <label>{`Total Downpayment - ${downPayment}`}</label>
          <div className="downpayment-slider">
            <Slider
              id="downpayment"
              min={0}
              max={cost}
              value={downPayment}
              onChange={(e) => {
                if (!cost) return;

                const value = Number(e.target.value);

                setDownpayment(value.toFixed(0));
                setLoan(emi.calculateEmi(value));
              }}
            />
            <div className="slider-labels">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </section>
        <section className="loan">
          <h3>Loan per Month</h3>
          <label>{`Total Loan payment - ${(loan * tenure).toFixed(0)}`}</label>
          <div className="loan-slider">
            <Slider
              id="loan"
              min={0}
              max={emi.calculateEmi(0)}
              value={loan}
              onChange={(e) => {
                if (!cost) return;

                const value = Number(e.target.value);

                setLoan(value.toFixed(0));
                setDownpayment(emi.calculateDp(value));
              }}
            />
            <div className="slider-labels">
              <span>0%</span>
              <span>{loan}</span>
              <span>100%</span>
            </div>
          </div>
        </section>
        <section className="tenure">
          <h3>Tenure (months)</h3>
          {months.map((month) => (
            <Button
              type="button"
              id={month}
              key={month}
              label={month}
              onClick={handleClick(month)}
              className={month === tenure ? "active" : ""}
            />
          ))}
        </section>
      </form>
    </>
  );
};

export default EmiCalc;
