import React from "react";

// components

import Education from "components/Cards/Education";

export default function EducationView() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4 mt-16">
                    <Education />
                </div>
            </div>
        </>
    );
}