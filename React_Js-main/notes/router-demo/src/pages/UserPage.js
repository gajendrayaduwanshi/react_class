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
           const {data} = await axios(`https://api.github.com/users/${props.match.params.id}`
            )
            setUser(data)
        }
        getUser()
        },[])

        return user.loading ? (
            <div>Loading...</div>
        ):(
            <div className="container">
                <h1>{props.match.params.id}</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Bio</th>
                            <th>Followers</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.bio}</td>
                            <td>{user.followers}</td>
                            <td>{user.company}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

}