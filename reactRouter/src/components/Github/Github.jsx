import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/ShreyashIngle")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-3xl bg-gray-500 text-white p-4">
      Github Followers: {data.followers}
      <img className="text-2xl text-center" src={data.avatar_url} alt="" width="300" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async()=>{
  const res = await fetch("https://api.github.com/users/ShreyashIngle")
  return res.json();
}
