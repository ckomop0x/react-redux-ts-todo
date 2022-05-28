import { FC } from 'react';

import Task from '../Task';

import { TasksListWrapper } from './styles';

import { TaskInterface } from 'types';

interface TasksListProps {
  tasks?: TaskInterface[];
}

const TasksList: FC<TasksListProps> = ({ tasks }) => (
  <TasksListWrapper>
    {tasks && tasks?.length > 0 ? (
      tasks.map(({ id, title, isCompleted }) => (
        <Task key={id} id={id} title={title} isCompleted={isCompleted} />
      ))
    ) : (
      <div>Create your first task</div>
    )}
  </TasksListWrapper>
);

export default TasksList;
