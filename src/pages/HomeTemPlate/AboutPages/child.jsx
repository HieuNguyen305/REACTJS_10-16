import React, { memo } from 'react'

function ChildAbout() {
    console.log("ChildAbout");
    return (
        <div>ChildAbout</div>
    )
}
export default memo(ChildAbout);
