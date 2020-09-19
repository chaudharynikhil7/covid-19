import React from "react";

import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    let data = await fetchData();
    this.setState({ data });
    console.log(this.state.data);
  }
  handleCountryChange = async (country) => {
    let data = await fetchData(country);
    this.setState({ data, country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt="COVID-19" src={coronaImage} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
