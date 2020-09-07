import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Graph(props) {
  /* Initializing function variables */

  const data = [];
  var principal = props.principal;
  var interest = props.interest;
  var amortPeriod = props.amortPeriod;
  var payFrequency = props.payFrequency;
  var compoundFrequency = props.compoundFrequency;
  var labelOne = "";
  var labelTwo = "";
  var labelThree = "";

  /* Determining what graph type to display */

  if (props.graphType === "PaymentBreakdown") {
    labelOne = "Interest Payment";
    labelTwo = "Principal Payment";
    labelThree = "Total Payment";
  } else if (props.graphType === "TotalInterestAndEquity") {
    labelOne = "Total Interest";
    labelTwo = "Equity";
    labelThree = null;
  }

  /* Rendering graph if all parameters are entered */

  if (
    interest !== "" &&
    principal !== "" &&
    amortPeriod !== "" &&
    payFrequency !== "" &&
    compoundFrequency !== "" &&
    labelOne !== ""
  ) {
    var p = principal;
    var i = parseFloat(interest) / 100;
    var n = amortPeriod;
    var x = 0;

    switch (payFrequency) {
      case "weekly":
        x = 52;
        break;
      case "bi-weekly":
        x = 26;
        break;
      case "monthly":
        x = 12;
        break;
      default:
        x = 12;
    }

    switch (compoundFrequency) {
      case "monthly":
        i = i / x;
        break;
      case "semi-annually":
        i = Math.pow(1 + i / 2, 2 / x) - 1;
        break;
      default:
        i = i / x;
    }

    /* Calculating monthly payment */

    const payment = (p * i) / (1 - Math.pow(1 + i, -n * x));

    var interestPayment = 0;
    var principalPayment = 0;
    var totalInterest = 0;
    var equity = 0;

    /* Building array of objects containing monthly payment data*/

    for (let j = 0; j < x * n; j++) {
      interestPayment = p * i;
      totalInterest = totalInterest + interestPayment;
      principalPayment = payment - interestPayment;
      equity = equity + principalPayment;
      data.push({
        "Payment Number": j + 1,
        "Opening Balance": Math.round(100 * p) / 100,
        "Interest Payment": Math.round(100 * interestPayment) / 100,
        "Principal Payment": Math.round(100 * principalPayment) / 100,
        "Total Payment": Math.round(100 * payment) / 100,
        "Total Interest": Math.round(100 * totalInterest) / 100,
        "Closing Balance": Math.round(100 * (p - principalPayment)) / 100,
        Equity: Math.round(100 * equity) / 100,
      });
      p = p - principalPayment;
    }

    /* Returning graph with data for user-defined parameters*/

    return (
      <div>
        <AreaChart
          width={props.width}
          height={600}
          data={data}
          margin={{ top: 0, right: 50, left: 50, bottom: 50 }}
        >
          <defs>
            <linearGradient id="gradientOne" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradientTwo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradientThree" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4287f5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4287f5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="Payment Number" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey={labelThree}
            stroke="#4287f5"
            fillOpacity={1}
            fill="url(#gradientThree)"
          />
          <Area
            type="monotone"
            dataKey={labelOne}
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#gradientOne)"
          />
          <Area
            type="monotone"
            dataKey={labelTwo}
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#gradientTwo)"
          />
        </AreaChart>
      </div>
    );
  } else {
    /* Returning null if all parameters are not set*/

    return null;
  }
}

export default Graph;
