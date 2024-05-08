import React, { useState } from "react";
import Form from "./Models/Form";
import ResultsTable from "./Models/ResultsTable";

const App = () => {
  const [results, setResults] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);

  const calculateResults = (capital, dailyInterest, days) => {
    const calculatedResults = [];
    let currentCapital = capital;
    let totalProfit = 0;

    for (let i = 1; i <= days; i++) {
      const profit = currentCapital * dailyInterest;
      const amount = currentCapital + profit;
      calculatedResults.push({
        day: i,
        capital: currentCapital.toFixed(2),
        dailyInterest: dailyInterest.toFixed(2),
        profit: profit.toFixed(2),
        amount: amount.toFixed(2),
      });
      currentCapital = amount;
      totalProfit += profit;
    }

    setResults(calculatedResults);
    setTotalProfit(totalProfit + capital);
  };

  const clearResults = () => {
    setResults([]);
    setTotalProfit(0);
  };

  return (
    <main className="flex justify-center items-center">
      <section className="text-white">
        <div className="fixed w-full left-0">
          <Form calculateResults={calculateResults} />
        </div>
        <div className="mt-[500px]">
          <ResultsTable
            results={results}
            totalProfit={totalProfit}
            clearResults={clearResults}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
