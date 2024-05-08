import React, { useState } from "react";
import "../App.css";

const Form = ({ calculateResults }) => {
  const [formData, setFormData] = useState({
    capital: "",
    dailyInterest: "",
    days: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateResults(
      parseFloat(formData.capital),
      parseFloat(formData.dailyInterest),
      parseInt(formData.days)
    );
  };

  return (
    <div className="w-full flex justify-center px-16 bg-dark z-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-6 w-[80%] borderForm rounded-xl bg-dark z-50 px-40 py-20 mt-10"
      >
        <div className="flex justify-between">
          <label className="font-bold flex flex-col gap-5">
            Initial Capital ($):
            <input
              type="number"
              name="capital"
              value={formData.capital}
              onChange={handleChange}
              inputMode="numeric"
              className="text-white bg-gray-500 p-3 rounded-full outline-none"
            />
          </label>
          <br />
          <label className="font-bold flex flex-col gap-5">
            Daily Interest (%):
            <input
              type="number"
              name="dailyInterest"
              value={formData.dailyInterest}
              onChange={handleChange}
              inputMode="numeric"
              className="text-white bg-gray-500 p-3 rounded-full outline-none"
            />
          </label>
          <br />
          <label className="font-bold flex flex-col gap-5">
            Number of Days:
            <input
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
              inputMode="numeric"
              className="text-white bg-gray-500 p-3 rounded-full outline-none"
            />
          </label>
        </div>
        <button type="submit" className="bg-white text-dark p-4 rounded-full font-extrabold">Calculate Results</button>
      </form>
    </div>
  );
};

export default Form;
