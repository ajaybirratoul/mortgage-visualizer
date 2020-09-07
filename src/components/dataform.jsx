import React, { Component } from "react";
import Graph from "./graph";

class DataForm extends Component {
  state = {};

  /* Initializing instance variables */

  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      value: "",
      interest: "",
      principal: "",
      amortPeriod: "",
      payFrequency: "",
      compoundFrequency: "",
      amortPer: [
        { id: "1 year", value: 1 },
        { id: "2 years", value: 2 },
        { id: "3 years", value: 3 },
        { id: "4 years", value: 4 },
        { id: "5 years", value: 5 },
        { id: "6 years", value: 6 },
        { id: "7 years", value: 7 },
        { id: "8 years", value: 8 },
        { id: "9 years", value: 9 },
        { id: "10 years", value: 10 },
        { id: "11 years", value: 11 },
        { id: "12 years", value: 12 },
        { id: "13 years", value: 13 },
        { id: "14 years", value: 14 },
        { id: "15 years", value: 15 },
        { id: "16 years", value: 16 },
        { id: "17 years", value: 17 },
        { id: "18 years", value: 18 },
        { id: "19 years", value: 19 },
        { id: "20 years", value: 20 },
        { id: "21 years", value: 21 },
        { id: "22 years", value: 22 },
        { id: "23 years", value: 23 },
        { id: "24 years", value: 24 },
        { id: "25 years", value: 25 },
        { id: "26 years", value: 26 },
        { id: "27 years", value: 27 },
        { id: "28 years", value: 28 },
        { id: "29 years", value: 29 },
        { id: "30 years", value: 30 },
      ],

      payFreq: [
        { id: "weekly", value: "weekly" },
        { id: "bi-weekly", value: "bi-weekly" },
        { id: "monthly", value: "monthly" },
      ],
      compoundFreq: [
        { id: "semi-annually", value: "semi-annually" },
        { id: "perMonth", value: "monthly" },
      ],

      graphType: "",
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleChangePrincipal = this.handleChangePrincipal.bind(this);
    this.handleChangeInterest = this.handleChangeInterest.bind(this);
    this.handleChangeAmortPeriod = this.handleChangeAmortPeriod.bind(this);
    this.handleChangePayFreq = this.handleChangePayFreq.bind(this);
    this.handleChangeCompoundFreq = this.handleChangeCompoundFreq.bind(this);
    this.handleChangeGraphType = this.handleChangeGraphType.bind(this);
  }

  /* Updating form input field and select values */

  handleChangePrincipal(event) {
    this.setState({ principal: event.target.value });
  }
  handleChangeInterest(event) {
    this.setState({ interest: event.target.value });
  }
  handleChangeAmortPeriod(event) {
    this.setState({ amortPeriod: event.target.value });
  }
  handleChangePayFreq(event) {
    this.setState({ payFrequency: event.target.value });
  }

  handleChangeCompoundFreq(event) {
    this.setState({ compoundFrequency: event.target.value });
  }

  handleChangeGraphType(event) {
    this.setState({ graphType: event.target.value });
  }

  /* Adding event listener for resizing window and updating height and width of window */

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  render() {
    return (
      <div>
        <h1 className="display-4 col-md-12 text-center mt-5">
          Mortgage Visualizer
        </h1>
        <form className="form m-5">
          <div className="form-row">
            <div className="col-md-8 mb-4">
              <label htmlFor="inputPrincipalValue">Principal Value</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  id="inputPrincipalValue"
                  type="text"
                  className="form-control"
                  value={this.state.principal}
                  onChange={this.handleChangePrincipal}
                />
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <label htmlFor="inputInterest">Interest Rate</label>
              <div className="input-group">
                <input
                  id="inputInterest"
                  type="text"
                  className="form-control"
                  value={this.state.interest}
                  onChange={this.handleChangeInterest}
                />
                <div className="input-group-append">
                  <span className="input-group-text">%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4 mb-4">
              <label htmlFor="selectAmortizationPeriod">
                Amortization Period
              </label>
              <div className="input-group">
                <select
                  id="selectAmortizationPeriod"
                  className="custom-select form-control"
                  value={this.state.amortPeriod}
                  onChange={this.handleChangeAmortPeriod}
                >
                  <option></option>
                  {this.state.amortPer.map((item) => (
                    <option key={item.id} id={item.id}>
                      {item.value}
                    </option>
                  ))}
                </select>
                <div className="input-group-append">
                  <span className="input-group-text">Years</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <label htmlFor="selectPaymentFrequency">Payment Frequency</label>
              <select
                id="selectPaymentFrequency"
                className="custom-select"
                value={this.state.payFrequency}
                onChange={this.handleChangePayFreq}
              >
                <option></option>
                {this.state.payFreq.map((item) => (
                  <option key={item.id} id={item.id}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 mb-4">
              <label htmlFor="selectCompoundingFrequency">
                Compounding Frequency
              </label>
              <select
                id="selectCompoundingFrequency"
                className="custom-select"
                value={this.state.compoundFrequency}
                onChange={this.handleChangeCompoundFreq}
              >
                <option></option>
                {this.state.compoundFreq.map((item) => (
                  <option key={item.id} id={item.id}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <h5 className="mb-2">Chart Type: </h5>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline1"
              name="customRadioInline1"
              className="custom-control-input"
              value="PaymentBreakdown"
              onChange={this.handleChangeGraphType}
            />
            <label
              className="custom-control-label"
              htmlFor="customRadioInline1"
            >
              Payment Breakdown
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline2"
              name="customRadioInline1"
              className="custom-control-input"
              value="TotalInterestAndEquity"
              onChange={this.handleChangeGraphType}
            />
            <label
              className="custom-control-label"
              htmlFor="customRadioInline2"
            >
              Total Interest and Equity
            </label>
          </div>
        </form>

        <Graph
          width={this.state.width}
          graphType={this.state.graphType}
          principal={this.state.principal}
          interest={this.state.interest}
          amortPeriod={this.state.amortPeriod}
          payFrequency={this.state.payFrequency}
          compoundFrequency={this.state.compoundFrequency}
        />
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export { DataForm };
