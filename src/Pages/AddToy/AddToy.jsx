import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {

    const {user} = useContext(AuthContext);

    const handleAddToy = event=>{
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = user?.email;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const add = {
            customerName: username,
            email,
            category,
            price,
            photo,
            rating,
            quantity            

        }
        form.reset();
        console.log(add);
        fetch('https://toy-marketplace-server-side-shazidkarim.vercel.app/addtoy',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(add)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('toy added successfully')
            }
        })
    }

    return (
        
                    <div className="card-body">
                       <form onSubmit={handleAddToy}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="form-control">
                            <label className="label">
                                <span className="label-text">username</span>
                            </label>
                            <input type="text" name="username" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">doll photo url</span>
                            </label>
                            <input type="text" name="photo" placeholder="doll photo url" className="input input-bordered" />
                        </div>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">category</span>
                            </label>
                            <input type="text" name="category" placeholder="baby doll/ barbie doll/american girl doll" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />
                        </div>
                      </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Add Toy" />
                        </div>
                       </form>
                    </div>
    );
};

export default AddToy;