import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setdata] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/ayushkale")
  //     .then((data) => data.json())
  //     .then((data) => setdata(data));
  // }, []);
  const data = useLoaderData();
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        GitHub follower :{data.followers}
        <img
          src={data.avatar_url}
          alt="Git picture"
          width={300}
          className="border-spacing-3 rounded-xl border-black"
        />
      </div>
    </>
  );
}

export default Github;

export const GithubInfo = async () => {
  const data = await fetch("https://api.github.com/users/ayushkale");
  return data.json();
};
