import React from "react";

// components

import Skills from "components/Cards/Skills";

export default function SkillsView() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4 mt-16">
                    <Skills />
                </div>
            </div>
        </>
    );
}