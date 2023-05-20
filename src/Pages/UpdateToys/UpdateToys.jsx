import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const UpdateToys = () => {
    const toys = useLoaderData();
    const {user} = useContext(AuthContext);
    const { _id, category, price, quantity, rating, photo, customerName } = toys;

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = user?.email;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const updatedToy = {
            customerName: username,
            email,
            category,
            price,
            photo,
            rating,
            quantity

        }
        console.log(updatedToy);
        fetch(`http://localhost:5000/addtoy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifyCount>0) {
                    alert('toy updated successfully')
                }
            })
    }

    return (
        <div className="card-body">
            <h2 className="text-3xl font-bold text-center">Update Toy</h2>
            <form onSubmit={handleUpdateToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">username</span>
                        </label>
                        <input type="text" name="username" defaultValue={customerName} placeholder="name" className="input input-bordered" />
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
                        <input type="text" name="photo" defaultValue={photo} placeholder="doll photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="baby doll/ barbie doll/american girl doll" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price}  placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Update Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;