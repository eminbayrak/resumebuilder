import React from "react";

// components

import Contact from "components/Cards/Contact";

export default function ContactView() {
    return (
        <>
            <div className="flex flex-wrap">

                <div className="w-full px-4 mt-16">
                    <Contact />
                </div>
            </div>
        </>
    );
}