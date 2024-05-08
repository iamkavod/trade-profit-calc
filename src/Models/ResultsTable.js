import React from "react";
import "../App.css";

const ResultsTable = ({ results, totalProfit, clearResults }) => {
  const handleClear = () => {
    clearResults();
  };

  if (!results || results.length === 0) {
    return <p>No results to display</p>;
  }

  return (
    <main className="flex flex-col justify-center w-full -z-40 rounded-xl">
      <div className="w-[100%] px-60 fixed mt-60 right-0 h-96 overflow-auto tableData">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-white dark:text-white">
            <thead class="text-xs text-dark uppercase dark:text-dark sticky top-0 bg-gray-50 dark:bg-white">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Day
                </th>
                <th scope="col" class="px-6 py-3">
                  Capital
                </th>
                <th scope="col" class="px-6 py-3">
                  Daily Interest
                </th>
                <th scope="col" class="px-6 py-3">
                  Profit
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {results.map((result) => (
                <tr
                  class="border-b border-gray-200 dark:border-gray-700"
                  key={result.day}
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-dark"
                  >
                    {result.day}
                  </th>
                  <td class="px-6 py-4">${result.capital}</td>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-dark">
                    {result.dailyInterest}
                  </td>
                  <td class="px-6 py-4">${result.profit}</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-dark"
                  >
                    ${result.amount}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col mt-4 absolute bottom-0 mb-9 left-0 right-0 px-60 gap-5">
        {" "}
        {/* Added margin-top for spacing */}
        <p className="text-center mb-2">
          {" "}
          {/* Added margin-bottom for spacing */}
          Total profit for <span className="text-xl font-extrabold">{results.length}</span> days trades is: <span className="text-xl font-extrabold">$

          {totalProfit.toFixed(2)}</span>
        </p>
        <button
          onClick={handleClear}
          className="bg-white text-dark font-bold py-3 rounded-full"
        >
          Clear Table
        </button>
      </div>
    </main>
  );
};

export default ResultsTable;
