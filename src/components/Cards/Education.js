import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { education } from "features/education";

// components

export default function Education() {

  const educationValues = useSelector((state) => state.education.value);
  const dispatch = useDispatch();

  const [ schoolNameValue, setSchoolNameValue ] = React.useState('');

  function handleSchoolNameChange(e) {
    setSchoolNameValue(e.target.value);
  }

  const [ schoolLocationValue, setSchoolLocationValue ] = React.useState('');

  function handleSchoolLocationChange(e) {
    setSchoolLocationValue(e.target.value);
  }

  const [ degreeValue, setDegreeValue ] = React.useState('');

  function handleDegreeChange(e) {
    setDegreeValue(e.target.value);
  }

  const [ fieldOfStudyValue, setFieldOfStudyValue ] = React.useState('');

  function handleFieldOfStudyChange(e) {
    setFieldOfStudyValue(e.target.value);
  }

  const [ startDateValue, setStartDateValue ] = React.useState('');

  function handleStartDateValueChange(e) {
    setStartDateValue(e.target.value);
  }

  const [ endDateValue, setEndDateValue ] = React.useState('');

  function handleEndDateValueChange(e) {
    setEndDateValue(e.target.value);
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-blueGray-700 text-xl font-bold">Education</h4>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                dispatch(education({
                  schoolName: schoolNameValue,
                  schoolLocation: schoolLocationValue,
                  degree: degreeValue,
                  fieldOfStudy: fieldOfStudyValue,
                  startDate: startDateValue,
                  endDate: endDateValue,
                }))
              }}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <br />
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name of school
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Princeton University"
                    value={ schoolNameValue }
                    onChange={ handleSchoolNameChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    School location
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Princeton, NJ"
                    value={ schoolLocationValue }
                    onChange={ handleSchoolLocationChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Degree
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Bachelors"
                    value={ degreeValue }
                    onChange={ handleDegreeChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Field of Study
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Nursing"
                    value={ fieldOfStudyValue }
                    onChange={ handleFieldOfStudyChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Start date
                  </label>
                  <input
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={ startDateValue }
                    onChange={ handleStartDateValueChange }
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    End date
                  </label>
                  <input
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={ endDateValue }
                    onChange={ handleEndDateValueChange }
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
