import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { tasksActions } from '../../../store';

import TaskControls from './TaskControls';
import { TaskTitle, TaskWrapper } from './styles';

import Input from 'components/UI/Input';

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

const Task: FC<TaskProps> = ({ id, title = '', isCompleted = false }) => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState<string>(title);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState<boolean>(false);

  const editHandler = (): void => {
    if (!editMode) {
      setEditMode(true);
      return;
    }

    dispatch(
      tasksActions.updateTask({
        id,
        title: taskTitle,
        isCompleted,
      }),
    );

    setEditMode(false);
  };

  const cancelEditHandler = (): void => {
    setEditMode(false);
    setTaskTitle(() => title);
    setIsSaveButtonDisabled(false);
  };

  const taskChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTaskTitle(event.currentTarget.value);

    if (!event.currentTarget.value.trim()) {
      setIsSaveButtonDisabled(true);
      return;
    }

    setIsSaveButtonDisabled(false);
  };

  const taskCompleteHandler = (): void => {
    dispatch(
      tasksActions.updateTask({
        id,
        title: taskTitle,
        isCompleted: !isCompleted,
      }),
    );
  };

  const taskDeleteHandler = (): void => {
    dispatch(tasksActions.deleteTask({ id }));
  };

  return (
    <TaskWrapper editMode={editMode}>
      {!editMode && <TaskTitle isCompleted={isCompleted}>{taskTitle}</TaskTitle>}
      {editMode && <Input value={taskTitle} onChange={taskChangeHandler} />}
      <TaskControls
        editMode={editMode}
        isSaveButtonDisabled={isSaveButtonDisabled}
        isCompleted={isCompleted}
        cancelEditHandler={cancelEditHandler}
        editHandler={editHandler}
        completeHandler={taskCompleteHandler}
        deleteHandler={taskDeleteHandler}
      />
    </TaskWrapper>
  );
};

export default Task;
