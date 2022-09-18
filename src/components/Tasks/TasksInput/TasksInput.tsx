import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { tasksActions } from '../../../store';

import { TasksInputWrapper } from './styles';

import Button from 'components/UI/Button';
import Input from 'components/UI/Input';

const TasksInput = () => {
  const [title, setTitle] = useState<string>('');
  const [isSubmittable, setIsSubmittable] = useState<boolean>(false);
  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!isSubmittable) return;

    const taskTitle = title.trim();

    dispatch(
      tasksActions.addTask({
        id: uuidv4(),
        isCompleted: false,
        title: taskTitle,
      }),
    );

    setTitle('');
    setIsSubmittable(false);
  };

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const currentTitle = event.currentTarget.value;
    setTitle(currentTitle);
    setIsSubmittable(!!currentTitle.trim());
  };

  const deleteClickHandler = (): void => {
    dispatch(tasksActions.deleteAllTasks());
  };

  const sortClickHandler = (): void => {
    dispatch(tasksActions.sortTasksByName());
  };

  return (
    <TasksInputWrapper onSubmit={submitHandler}>
      <Input placeholder="Add your tasks" onChange={inputChangeHandler} value={title} />
      <Button type="submit" disabled={!isSubmittable}>
        Add
      </Button>
      <Button onClick={deleteClickHandler}>Delete all</Button>
      <Button onClick={sortClickHandler}>Sort Tasks</Button>
    </TasksInputWrapper>
  );
};

export default TasksInput;
