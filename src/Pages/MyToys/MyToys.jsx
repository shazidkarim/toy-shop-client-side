/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [addtoys, setAddToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order is ascending
  const url = `https://toy-marketplace-server-side-shazidkarim.vercel.app/addtoy?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAddToys(data);
        console.log(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://toy-marketplace-server-side-shazidkarim.vercel.app/addtoy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = addtoys.filter((addtoy) => addtoy._id !== id);
            setAddToys(remaining);
          }
        });
    }
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    const sortedToys = [...addtoys].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setAddToys(sortedToys);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full border">
        <thead className="border">
          <tr>
            <th>
              <h2>Customer name</h2>
            </th>
            <th className="py-2">Category</th>
            <th className="py-2" onClick={handleSort}>
              Price <button className="btn-primary border p-2 "> sort{sortOrder === "asc" ? <span>&uarr;</span> : <span>&darr;</span>}</button>
            </th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Rating</th>
            <th className="py-2">Update</th>
            <th className="py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {addtoys.map((addtoy) => (
            <MyToysRow key={addtoy._id} handleDelete={handleDelete} addtoy={addtoy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
