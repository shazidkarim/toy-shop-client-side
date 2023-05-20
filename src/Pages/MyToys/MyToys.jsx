import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyToys = () => {
    const {user} =useContext(AuthContext);
    const url = `http://localhost:5000/addtoy?email=${user.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    },[])
    return (
        <div>
            <h2>this is my toys</h2>
        </div>
    );
};

export default MyToys;