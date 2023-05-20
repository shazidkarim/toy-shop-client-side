import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const {user} =useContext(AuthContext);
    const [addtoys , setAddToys] = useState([]);
    const url = `http://localhost:5000/addtoy?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setAddToys(data);
            console.log(data);
        })
    },[])

    const handleDelete = id =>{
        const proceed = confirm('are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/addtoy/${id}`,{
                method:'DELETE'
            })  
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('deleted sucessfull');
                    const remaining = addtoys.filter(addtoy=> addtoy._id !==id);
                    setAddToys(remaining);
                }
            })
        }
    }


    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full border">
    {/* head */}
    <thead className="border">
      <tr>
        <th>
         <h2>Customar name</h2>
        </th>
        
            <th className="py-2">Category</th>
            <th className="py-2">Price</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Rating</th>
            <th className="py-2">Update</th>
            <th className="py-2">delete</th>
      </tr>
    </thead>
    <tbody>
      {
        addtoys.map(addtoy=><MyToysRow key={addtoy._id} handleDelete={handleDelete} addtoy={addtoy}></MyToysRow>)
      }
    </tbody>
   
  </table>
</div>
    );
};

export default MyToys;