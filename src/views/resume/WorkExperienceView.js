import React from "react";

// components

import WorkExperience from "components/Cards/WorkExperience";

export default function WorkExperienceView() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4 mt-16">
                    <WorkExperience />
                </div>
            </div>
        </>
    );
}