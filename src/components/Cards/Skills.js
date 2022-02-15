import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { skills } from "features/skills";

// components

export default function Skill() {

  const educationValues = useSelector((state) => state.education.value);
  console.log(educationValues.schoolName)
  const dispatch = useDispatch();

  const [ skill1Value, setSkill1Value ] = React.useState('');

  function handleSkill1Change(e) {
    setSkill1Value(e.target.value);
  }

  const [ skill2Value, setSkill2Value ] = React.useState('');

  function handleSkill2Change(e) {
    setSkill2Value(e.target.value);
  }

  const [ skill3Value, setSkill3Value ] = React.useState('');

  function handleSkill3Change(e) {
    setSkill3Value(e.target.value);
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-blueGray-700 text-xl font-bold">Skills</h4>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                dispatch(skills({
                  skill1: skill1Value,
                  skill2: skill2Value,
                  skill3: skill3Value,
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
            <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Skill #1
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="MS Office"
                    value={ skill1Value }
                    onChange={ handleSkill1Change }
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Skill #2
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Point of sales system"
                    value={ skill2Value }
                    onChange={ handleSkill2Change }
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Skill #3
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Communication"
                    value={ skill3Value }
                    onChange={ handleSkill3Change }
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
