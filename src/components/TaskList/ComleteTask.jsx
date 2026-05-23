import React from "react";

const CompleteTask = () => {

    return (

        <div className=" shrink-0 h-full w-75 p-5 bg-green-400  rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className=" bg-red-600 text-sm px-3 py-1  ">High</h3>
                <h4 className="text-sm">20 Feb 2024</h4>

            </div>

            <h2 className="mt-5 tedxt-xl font-semibold">Makea Video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, velit.</p>
            <div className="mt-2 ">
                <button className="w-full"> Complet</button>

            </div>
        </div>

    )
}

export default CompleteTask