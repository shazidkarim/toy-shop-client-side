import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [dolls, setDolls] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchDolls = async () => {
      try {
        const res = await fetch('dolls.json');
        if (!res.ok) {
          throw new Error('Failed to fetch dolls.');
        }
        const data = await res.json();
        setDolls(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDolls();
  }, []);

  const filteredDolls = dolls.filter((doll) => {
    return doll.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="overflow-x-auto w-full text-center">
        <h1 className=" text-blue-500 mb-5 mt-8 text-2xl">search by toy name</h1>
      <div className="mb-4 m-auto text-center">
        <input
          type="text"
          placeholder=" toy name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-900 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th className="py-2">Toy Name</th>
            <th className="py-2">Category</th>
            <th className="py-2">Price</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredDolls.map((doll) => (
            <AllToysRow key={doll.doll_id} doll={doll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
