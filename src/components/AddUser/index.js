import {Component} from 'react'
import {v4} from 'uuid'

import Sidebar from '../Sidebar'
import Topbar from '../Topbar'

import './index.css'

class AddUser extends Component {
  state = {
    usernameInput: '',
    emailInput: '',
    phoneInput: '',
    dobInput: '',
    stateInput: '',
    emailErr: false,
    phoneErr: false,
    userErr: false,
  }

  onChangeState = event => {
    this.setState({stateInput: event.target.value})
  }

  onChangeUsername = event => {
    const input = event.target.value
    this.setState({usernameInput: event.target.value})
    if (input === undefined) {
      this.setState({userErr: true})
    } else {
      this.setState({userErr: false})
    }
  }

  onChangeEmail = event => {
    const input = event.target.value
    this.setState({emailInput: event.target.value})
    if (!input.includes('@gmail.com')) {
      this.setState({emailErr: true})
    } else {
      this.setState({emailErr: false})
    }
  }

  onChangePhone = event => {
    const input = event.target.value
    this.setState({phoneInput: event.target.value})
    const numLength = input.length
    if (numLength < 10) {
      this.setState({phoneErr: true})
    } else {
      this.setState({phoneErr: false})
    }
  }

  onChangeDob = event => {
    this.setState({dobInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      usernameInput,
      emailInput,
      phoneInput,
      dobInput,
      stateInput,
    } = this.state
    const newUser = {
      id: v4(),
      username: usernameInput,
      email: emailInput,
      phone: phoneInput,
      DOB: dobInput,
      state: stateInput,
    }

    const user = JSON.parse(localStorage.getItem('usersList'))
    if (user) {
      const newData = [...user, newUser]
      localStorage.setItem('usersList', JSON.stringify(newData))
    } else {
      const newData = [newUser]
      localStorage.setItem('usersList', JSON.stringify(newData))
    }

    this.setState({
      usernameInput: '',
      emailInput: '',
      phoneInput: '',
      dobInput: '',
      stateInput: '',
    })
  }

  renderAddUserForm = () => {
    const {
      usernameInput,
      emailInput,
      phoneInput,
      dobInput,
      emailErr,
      phoneErr,
      stateInput,
      userErr,
    } = this.state

    return (
      <form onSubmit={this.onSubmitForm} className="form-container">
        <div>
          <label className="usernameLabel labelLaptop " htmlFor="userInput">
            Username
          </label>
          <input
            id="userInput"
            value={usernameInput}
            className="usernameInput inputLaptop"
            type="text"
            onChange={this.onChangeUsername}
            placeholder="Enter Username"
          />
          {userErr && (
            <p className="emailErrMsg inputLaptop">*Username Required</p>
          )}
        </div>

        <div>
          <label htmlFor="emailInput" className="emailLabel  labelLaptop ">
            Email
          </label>
          <input
            id="emailInput"
            value={emailInput}
            className="emailInput inputLaptop"
            type="text"
            onChange={this.onChangeEmail}
            placeholder="Enter Email"
          />
          {emailErr && (
            <p className="emailErrMsg inputLaptop">Enter valid email id</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="phoneLabel  labelLaptop ">
            Phone
          </label>
          <input
            id="phone"
            value={phoneInput}
            className="phoneInput inputLaptop"
            type="tel"
            onChange={this.onChangePhone}
            placeholder="Enter Phone Number"
          />
          {phoneErr && (
            <p className="inputLaptop phoneErrMsg">
              Enter a valid phone number(10 digits)
            </p>
          )}
        </div>
        <div>
          <label htmlFor="dob" className="DOBLabel  labelLaptop ">
            DOB
          </label>
          <input
            id="dob"
            value={dobInput}
            className="DOBInput inputLaptop"
            type="date"
            onChange={this.onChangeDob}
          />
        </div>
        <div>
          <p className="stateLabel  labelLaptop ">State</p>
          <select value={stateInput} onChange={this.onChangeState}>
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
        <button type="submit" className="submitButton inputLaptop">
          Create User
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="add-users-bg-container">
        <Sidebar activeTabId="ADDUSER" />
        <Topbar />
        <p className="form-heading">Add User</p>
        {this.renderAddUserForm()}
      </div>
    )
  }
}

export default AddUser
