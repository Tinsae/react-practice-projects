import React from 'react';
import MyParagraph from "./MyParagraph";
const DemoOutput = ({ showParagraph }) => {
    console.log("DEMO OUTPUT RUNNING")
    return (
        <MyParagraph>
            {showParagraph ? <p>A paragraph</p> : ""}
        </MyParagraph>
    )
}

export default React.memo(DemoOutput);
