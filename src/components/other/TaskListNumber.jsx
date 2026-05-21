import React from "react";

const TaskListNumber = () => {

    return (
        <div className="flex screen gap-5 ">
            <div className="h-40 w-[40%] py-6 px-9  bg-red-400 rounded-xl">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">Nem Task</h3>
            </div>
               <div className="h-40 w-[40%] py-6 px-9  bg-blue-400 rounded-xl">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">Complete Task</h3>
            </div>
               <div className="h-40 w-[40%] py-6 px-9  bg-green-400 rounded-xl ">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">Accepted Task</h3>
            </div>
               <div className="h-40 w-[40%] py-6 px-9  bg-yellow-200 rounded-xl">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">Failed Task</h3>
            </div>


        </div>
    )
}

export default TaskListNumber