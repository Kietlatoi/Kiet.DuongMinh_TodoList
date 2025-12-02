import React from "react";
import TaskEmptyState from "./TaskEmptyState";
import TaskCard from "./TaskCard";

const TaskList = ({ filteredTasks, filter, handleTaskChange }) => {
  if (!filteredTasks || filteredTasks.length === 0) {
    return <TaskEmptyState filter={filter} />;
  }

  return (
    <div className="space-y-3">
      {filteredTasks.map((task, index) => {
        return (
          <TaskCard
            key={task._id ?? index}
            task={task}
            index={index}
            handleTaskChange={handleTaskChange}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
