import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, []);

    return (
        <div className="bg-gray-700 text-white m-4 p-4"> Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Github picture" width={200} />
        </div>
    )
}

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}

export default Github;