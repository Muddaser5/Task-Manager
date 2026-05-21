// import React, { Children } from "react";

// const TaskContext = ({Children}) => {
//     return (


//         <div className="">{Children}</div>
//     )
// } 


// export default TaskContext



import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext value={{ tasks, setTasks }}>
      {children}
    </TaskContext>
  );
};

export default TaskContext