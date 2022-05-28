import { useSelector } from 'react-redux';

import { State } from '../../store';
import { TaskInterface } from '../../types';

import TasksInput from './TasksInput';
import TasksList from './TasksList';
import { TasksWrapper } from './styles';

const Tasks = () => {
  const tasks: TaskInterface[] = useSelector((state: State) => state.tasks);

  return (
    <TasksWrapper>
      <TasksInput />
      <TasksList tasks={tasks} />
    </TasksWrapper>
  );
};

export default Tasks;
