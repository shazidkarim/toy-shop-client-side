


const MyToysRow = ({addtoy,handleDelete}) => {
    const{_id,category,price,quantity,rating,photo,customerName} = addtoy;

   


    return (
        <tr>
        <th>
         <div className="text-center">
         {customerName}
         </div>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="avatar w-24 rounded border h-20">
                {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <h1>{category}</h1>
            </div>
          </div>
        </td>
        <td>
          {price}
        </td>
        <td>{quantity}</td>
        <td>{rating}</td>
        <th>
          <button className="btn btn-ghost ">update</button>
        </th>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-ghost ">delete </button>
        </th>
      </tr>
    );
};

export default MyToysRow;