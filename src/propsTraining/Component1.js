import React from 'react'

const Component1 = (props) => {
    return(
        <div>
            <h1>Hello, {props.name}! I know, you are {props.age} years old!</h1>
        </div>
    );
};

export default Component1;