import { FC } from 'react';

import Button from 'components/UI/Button';

interface EditButtonProps {
  disabled: boolean;
  editMode: boolean;
  onClick(): void;
}

const EditButton: FC<EditButtonProps> = ({ editMode, onClick, disabled }) => {
  const variant = editMode ? 'success' : undefined;
  const title = !editMode ? 'Edit' : 'Save';

  return (
    <Button onClick={onClick} disabled={disabled} variant={variant}>
      {title}
    </Button>
  );
};

export default EditButton;
