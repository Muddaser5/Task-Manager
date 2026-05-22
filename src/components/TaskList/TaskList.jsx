import React from "react";

const TaskList = ({data}) => {
    return (
        <>
            <div id='tasklist' className="h-[55%] overflow-x-auto  flex items-center justify=start gap-5 flex-nowrap w-full py-5  mt-10">
                <div className=" shrink-0 h-full w-75
                 p-5 bg-red-400  rounded-xl">
                    <div className="flex justify-between items-center">
                        <h3 className=" bg-red-600 text-sm px-3 py-1  ">High</h3>
                        <h4 className="text-sm">20 Feb 2024</h4>

                    </div>

                    <h2 className="mt-5 tedxt-xl font-semibold">Makea Video</h2>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, velit.</p>
                </div>
            </div>

            <div className=" shrink-0 h-full w-75 p-5 bg-yellow-400  rounded-xl">
                <div className="flex justify-between items-center">
                    <h3 className=" bg-red-600 text-sm px-3 py-1  ">High</h3>
                    <h4 className="text-sm">20 Feb 2024</h4>

                </div>

                <h2 className="mt-5 tedxt-xl font-semibold">Makea Video</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, velit.</p>
            </div>

            <div className=" shrink-0 h-full w-75 p-5 bg-green-400  rounded-xl">
                <div className="flex justify-between items-center">
                    <h3 className=" bg-red-600 text-sm px-3 py-1  ">High</h3>
                    <h4 className="text-sm">20 Feb 2024</h4>

                </div>

                <h2 className="mt-5 tedxt-xl font-semibold">Makea Video</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, velit.</p>
            </div>

            <div className=" shrink-0 h-full w-75 p-5 bg-blue-400  rounded-xl">
                <div className="flex justify-between items-center">
                    <h3 className=" bg-red-600 text-sm px-3 py-1  ">High</h3>
                    <h4 className="text-sm">20 Feb 2024</h4>

                </div>

                <h2 className="mt-5 tedxt-xl font-semibold">Makea Video</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, velit.</p>
            </div>


        </>

    )
}

export default TaskList 