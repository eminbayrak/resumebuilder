import React from "react";

import Create from "components/Cards/Create";

export default function CreateView() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4 mt-16">
                    <Create />
                </div>
            </div>
        </>
    );
}