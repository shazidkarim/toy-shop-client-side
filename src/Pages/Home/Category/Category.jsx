import { useEffect, useState } from "react";


const Category = () => {

    const [categorys, setCategory] = useState([]);

    useEffect(()=>{
        fetch('dolls.json')
        .then(res=>res.json())
        .then(data=>{
            setCategory(data)
            console.log(data)
        })
    },[])

    return (
        <div className="m-8">
            <div className="text-center">
                <h2 className="text-5xl">Our category</h2>
            </div>
            <div>
                {
                    categorys
                }
            </div>
        </div>
    );
};

export default Category;