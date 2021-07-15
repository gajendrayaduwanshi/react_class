import React from 'react';
import {Link} from 'react-router-dom';

export default function HomePage(){
    return(

        <div className="container">
            <h1>Home Page</h1>
            <p>
                <Link to="/itasworkshop">itasworkshop</Link> on my GitHub.
            </p>

           {/*  <h1>Quiz React-1</h1>
            <h2>What is React?</h2>
            <h3>0 opt 1</h3>
            <h3>0 opt 2</h3>
            <h3>0 opt 3</h3>
            <h3>0 opt 4</h3>
            
            <h3>Answer</h3>
            <p>
                <Link to="/praveen">praveen</Link> on my GitHub.
            </p> */}
        </div>
    );
}