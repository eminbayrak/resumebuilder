import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Education from "views/resume/EducationView";
import Maps from "views/admin/Maps.js";
import Contact from "views/resume/ContactView";
import WorkExperience from "views/resume/WorkExperienceView";
import Skills from "views/resume/SkillsView";
import Create from "views/resume/CreateView";
import Tables from "views/admin/Tables.js";

export default function Resume() {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64">
                <AdminNavbar />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10">
                    <Switch>
                        <Route path="/resume/education" exact component={Education} />
                        <Route path="/admin/maps" exact component={Maps} />
                        <Route path="/resume/contact" exact component={Contact} />
                        <Route path="/resume/workExperience" exact component={WorkExperience} />
                        <Route path="/resume/skills" exact component={Skills} />
                        <Route path="/resume/create" exact component={Create} />
                        <Route path="/admin/tables" exact component={Tables} />
                        <Redirect from="/admin" to="/admin/dashboard" />
                    </Switch>
                </div>
            </div>
        </>
    );
}