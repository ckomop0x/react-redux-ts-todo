import { useSelector } from 'react-redux';

import { State } from '../../store';
import { TaskInterface } from '../../types';

import TasksInput from './TasksInput';
import TasksList from './TasksList';
import { TasksWrapper } from './styles';

const Tasks = () => {
  const tasks: TaskInterface[] = useSelector((state: State) => state.tasks);
  const incompleteTasks = tasks.filter(task => !task.isCompleted);
  const completedTasks = tasks.filter(task => task.isCompleted);

  return (
    <TasksWrapper>
      <TasksInput />
      <h2>Incomplete</h2>
      <TasksList tasks={incompleteTasks} />
      <h2>Completed</h2>
      <TasksList tasks={completedTasks} />
    </TasksWrapper>
  );
};

export default Tasks;
