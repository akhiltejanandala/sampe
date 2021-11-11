import {Component} from 'react'

import './index.css'
import Topbar from '../Topbar'
import Sidebar from '../Sidebar'

class Weather extends Component {
  state = {
    currentState: '',
    weatherDetails: {},
  }

  componentDidMount() {
    this.getWeather()
  }

  getWeather = async () => {
    const {currentState} = this.state
    const url = `https://foreca-weather.p.rapidapi.com/current/102643743?alt=0&tempunit=C&windunit=MS&tz=india/${currentState}&lang=en`
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
        'x-rapidapi-key': '335f08af4fmsha97ca70b14f44f6p16e37djsn1cf2fe546b28',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedWeather = {
        temperature: data.current.temperature,
        humidity: data.current.relHumidity,
        pressure: data.current.pressure,
      }
      this.setState({weatherDetails: updatedWeather})
    }
  }

  onChangeState = event => {
    this.setState({currentState: event.target.value}, this.getWeather)
  }

  render() {
    const {weatherDetails, currentState} = this.state
    const {temperature, humidity, pressure} = weatherDetails
    return (
      <div className="weather-bg">
        <Sidebar activeTabId="WEATHER" />
        <Topbar />
        <p className="weather-heading">Weather</p>
        <div className="weather-container">
          <h1 className="select-state-heading">Select State</h1>
          <select value={currentState} onChange={this.onChangeState}>
            <option value="1">Andhra Pradesh</option>
            <option value="2">Arunachal Pradesh</option>
            <option value="3">Assam</option>
            <option value="4">Bihar</option>
            <option value="5">Chattisgarh</option>
            <option value="6">Goa</option>
            <option value="7">Gujarat</option>
            <option value="8">Haryana</option>
            <option value="9">Himachal Pradesh</option>
            <option value="10">Jammu and Kashmir</option>
            <option value="11">Jharkhand</option>
            <option value="12">Karnataka</option>
            <option value="13">Kerala</option>
            <option value="14">Madhya Pradesh</option>
            <option value="15">Maharastra</option>
            <option value="16">Manipur</option>
            <option value="17">Meghalaya</option>
            <option value="18">Mizoram</option>
            <option value="19">Nagaland</option>
            <option value="20">Odisha</option>
            <option value="21">Punjab</option>
            <option value="22">Rajastan</option>
            <option value="23">Sikkim</option>
            <option value="24">Tamil Nadu</option>
            <option value="25">Telangana</option>
            <option value="26">Tripura</option>
            <option value="27">Uttarakhand</option>
            <option value="28">Uttar Pradesh</option>
            <option value="29">West Bengal</option>
            <option value="30">Andaman and Nicobar Islands</option>
            <option value="31">Chandigarh</option>
            <option value="32">Dadra and Nagar Haveli</option>
            <option value="33">Daman and Diu</option>
            <option value="34">Delhi</option>
            <option value="35">Lakshadweep</option>
            <option value="36">Puducherry</option>
          </select>
        </div>
        <div className="weather-display">
          <hr className="vl1" />
          <hr className="vl2" />
        </div>
        <p className="temperature-heading">temperature</p>
        <p className="humidity-heading">Humidity</p>
        <p className="pressure-heading">Pressure</p>
        <h1 className="temperatureText">{temperature}</h1>
        <h1 className="humidityText">{humidity}</h1>
        <h1 className="pressureTexts">{pressure}</h1>
      </div>
    )
  }
}

export default Weather
