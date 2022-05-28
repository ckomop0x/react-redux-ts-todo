import { FC } from 'react';

import CancelButton from '../CancelButton';
import CompleteButton from '../CompleteButton';
import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';

import { TaskControlsWrapper } from './styles';

interface TaskControlsProps {
  editMode: boolean;
  isSaveButtonDisabled: boolean;
  isCompleted: boolean;
  editHandler(): void;
  cancelEditHandler(): void;
  completeHandler(): void;
  deleteHandler(): void;
}

const TaskControls: FC<TaskControlsProps> = ({
  editMode,
  isSaveButtonDisabled,
  isCompleted,
  editHandler,
  cancelEditHandler,
  completeHandler,
  deleteHandler,
}) => (
  <TaskControlsWrapper>
    <EditButton editMode={editMode} disabled={isSaveButtonDisabled} onClick={editHandler} />
    {editMode && <CancelButton onClick={cancelEditHandler} />}
    {!editMode && (
      <>
        <CompleteButton isCompleted={isCompleted} onClick={completeHandler} />
        <DeleteButton onClick={deleteHandler} />
      </>
    )}
  </TaskControlsWrapper>
);

export default TaskControls;
