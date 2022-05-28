import { FC } from 'react';

import Button from 'components/UI/Button';

interface CompleteButtonProps {
  isCompleted: boolean;
  onClick(): void;
}

const CompleteButton: FC<CompleteButtonProps> = ({ isCompleted, onClick }) => (
  <Button variant="success" onClick={onClick}>
    {isCompleted ? 'Resume' : 'Complete'}
  </Button>
);

export default CompleteButton;
