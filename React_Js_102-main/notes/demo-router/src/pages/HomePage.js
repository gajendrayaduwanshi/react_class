
import React from 'react';
import {Link} from 'react-router-dom';


export default function HomePage(){
    return(
        <div>
            <h1>Home Page</h1>
            <p><Link to="/itasworkshop">itasworkshop</Link> on my GitHub</p>
        </div>
    )
}