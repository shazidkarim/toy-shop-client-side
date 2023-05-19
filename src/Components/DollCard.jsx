/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const DollCard = ({doll}) => {
    const {picture,name,price,rating,category} = doll;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-full">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>price: $ {price}</p>
          <p>rating:  {rating}</p>
          <p>category:  {category}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
    );
};

export default DollCard;