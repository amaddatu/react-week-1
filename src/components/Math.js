import React from "react";

function Math(props){
    console.log(props);
    return <span>{`${props.children} = `} {eval(props.children)}</span>;
}

export default Math;