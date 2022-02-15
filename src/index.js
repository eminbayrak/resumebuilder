import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import contactReducer from "./features/contact"
import educationReducer from "./features/education"
import skills from "./features/skills"
import workExperience from "./features/workExperience"

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Resume from "layouts/Resume.js";

// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    education: educationReducer,
    skills: skills,
    workExperience: workExperience
  },
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/resume" component={Resume} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Index} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
