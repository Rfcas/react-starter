import React from "react";
import env from '@env';

const App = () => {
    console.log('env', env);
    return (
        <div>
            <h1>Hello, world!</h1>
            {/* <h2>Os 11 porcos do José!</h2>
            <img src="http://agriculturaemar.com/wp-content/uploads/2016/01/porcos-001-e1477414680302-660x330.jpg"/> */}
        </div>
    )
};

export default App;