import { useCallback } from "react";

const useEmi = ({ cost, rate, fee, downPayment, loan, tenure }) => {
  const calculateEmi = useCallback(
    (payment = downPayment) => {
      if (!cost) return;

      const p = cost - payment;
      const r = rate / 100;
      const n = tenure / 12;

      const EMI = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);

      return Number((EMI / 12).toFixed(0));
    },
    [cost, rate, tenure]
  );

  const calculateDp = (emi) => {
    if (!cost) return;
    const dp = 100 - (emi / calculateEmi(0)) * 100;
    return Number((dp / 100) * cost).toFixed(0);
  };

  return {
    calculateEmi,
    calculateDp
  };
};

export default useEmi;
