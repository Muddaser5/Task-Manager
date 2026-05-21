import React from "react";
import TaskListNumber from "../other/TaskListNumber";

const EmployeDashboard = () => {
    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">

            <Header />
            <TaskListNumber />
            <TaskList />
        </div>
    )
}


export default EmployeDashboard