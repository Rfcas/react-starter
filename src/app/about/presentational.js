import React from "react";

const About = ({ counter, decrement, increment, loadRequest }) => (
    <div>
        <h1>About works!</h1>
        <hr />
        <button onClick={loadRequest}>Load</button>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <pre>{JSON.stringify(counter, null, 2)}</pre>
    </div>
);

export default About;