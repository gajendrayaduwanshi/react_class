import axios from 'axios';
import React,{useState,useEffect} from 'react';

export default function UserPage(props){

    const initialUserState = {
        user:{},
        loading:true,
    }

    const[user,setUser] = useState(initialUserState)

    useEffect(() => {
        const getUser = async () =>{
            //axios('https://api.github.com/users/itasworkshop')
           const {data} = await axios(`http://localhost:5000/home/students`
            )
            console.log(data);
            setUser(data);
        }
        getUser();
        },[])

        return user.loading ? (
            <div>Loading...</div>
        ):(
            <div className="container">
                <h1>{props.match.params.id}</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user[0].id}</td>
                            <td>{user[0].name}</td>                            
                            <td>{user[0].subject}</td>
                            <td>{user[0].description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

}