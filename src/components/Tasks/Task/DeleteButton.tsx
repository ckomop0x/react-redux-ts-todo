import { FC } from 'react';

import Button from 'components/UI/Button';

interface DeleteButtonProps {
  onClick(): void;
}

const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => (
  <Button variant="alert" onClick={onClick}>
    Delete
  </Button>
);

export default DeleteButton;
