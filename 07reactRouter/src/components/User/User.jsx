import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams();
    return (
        <div className="bg-gray-700 p-10 text-white"> User: { userid }</div>
    )
}

export default User;