import { FC } from 'react';

import Button from 'components/UI/Button';

interface CancelButtonProps {
  onClick(): void;
}

const CancelButton: FC<CancelButtonProps> = ({ onClick }) => (
  <Button onClick={onClick} variant="alert">
    Cancel
  </Button>
);

export default CancelButton;
