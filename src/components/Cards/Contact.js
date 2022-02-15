import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { contact } from "features/contact";
// components

export default function Contact() {
  const contactValues = useSelector((state) => state.contact.value);
  const dispatch = useDispatch();

  const [ firstNameValue, setFirstNameValue ] = React.useState('');

  function handleFirstNameValueChange(e) {
    setFirstNameValue(e.target.value);
  }

  const [ lastNameValue, setLastNameValue ] = React.useState('');
  
  function handleLastNameValueChange(e) {
    setLastNameValue(e.target.value);
  }

  const [ emailValue, setEmailValue ] = React.useState('');
  
  function handleEmailValueChange(e) {
    setEmailValue(e.target.value);
  }

  const [ jobTitleValue, setJobTitleValue ] = React.useState('');
  
  function handleJobTitleValueChange(e) {
    setJobTitleValue(e.target.value);
  }

  const [ phoneNumberValue, setPhoneNumberValue ] = React.useState('');

  function handlePhoneNumberValueChange(e) {
    setPhoneNumberValue(e.target.value);
  }

  const [ cityValue, setCityValue ] = React.useState('');

  function handleCityValueChange(e) {
    setCityValue(e.target.value);
  }

  const [ stateValue, setStateValue ] = React.useState('');

  function handleStateValueChange(e) {
    setStateValue(e.target.value);
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-blueGray-700 text-xl font-bold">Contact Info</h4>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                dispatch(contact({
                  firstName: firstNameValue,
                  lastName: lastNameValue,
                  jobTitle: jobTitleValue,
                  email: emailValue,
                  phoneNumber: phoneNumberValue,
                  city: cityValue,
                  state: stateValue
                }))
              }}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold">
              What's the best way for employers to reach you?
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Rick"
                    value={ firstNameValue }
                    onChange={ handleFirstNameValueChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Last name
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="James"
                    value={ lastNameValue }
                    onChange={ handleLastNameValueChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Sales Associate"
                    value={ jobTitleValue }
                    onChange={ handleJobTitleValueChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="rjames@email.com"
                    value={ emailValue }
                    onChange={ handleEmailValueChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="(000) 000-0000"
                    value={ phoneNumberValue }
                    onChange={ handlePhoneNumberValueChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Princeton"
                    value={ cityValue }
                    onChange={ handleCityValueChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="NJ"
                    value={ stateValue }
                    onChange={ handleStateValueChange }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
