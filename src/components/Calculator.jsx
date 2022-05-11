import axios from "axios";
import React, { useState, useEffect } from "react";
import {SwitchVerticalIcon} from "@heroicons/react/solid";

const Calculator = () => {
  const BASE_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";

  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions(data[0].id, ...Object.keys(data));
      });
  }, []);

  return (
    <div name="convert" className="w-full my-24 bg-calculator-pattern bg-contain bg-local bg-repeat-x">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">CRYPTO CONVERTER</h2>
          <p className="text-3xl py-6 text-gray-500">
            Convert real-time $BTC price to currency of your choice.
          </p>
        </div>

        <div className="w-[600px] mx-auto gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-2xl">
            <p className="text-5xl font-bold text-indigo-600">Convert Here</p>

            <p className="text-gray-400 mt-6" id="price">
              <form>
                <p>
                  <input
                    type="number"
                    maxLength="10"
                    className="border-2 rounded-md p-2 w-32"
                  />
                  <select id="cars" name="cars" className="border-2 ml-2 p-2 rounded-md">
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Eth">Eth</option>
                    <option value="USDT">USDT</option>
                    <option value="Ripple">Ripple</option>
                  </select>
                  <options />
                </p>
              </form>
              <p className="text-3xl font-bold text-indigo-600"><SwitchVerticalIcon className="h-8 text-center mx-auto my-4"/></p>
              <form>
                <p>
                  <input
                    type="number"
                    maxLength="10"
                    className="border-2 rounded-md p-2 w-32"
                  />
                  <select id="cars" name="cars" className="border-2 ml-2 p-2 rounded-md">
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Eth">Eth</option>
                    <option value="USDT">USDT</option>
                    <option value="Ripple">Ripple</option>
                  </select>
                  <options />
                </p>
              </form>
            </p>
            {/* {console.log("Price = " + price)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
