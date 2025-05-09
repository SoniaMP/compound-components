import { createContext, useContext, ReactNode } from 'react';
import { Button, DialogActions as MuiDialogActions } from '@mui/material';
import { useLiterals } from '../hooks/useLiterals';

interface DialogActionsContextType {
  literals: Record<string, string>;
  onAction: (action: string) => void;
}

interface DialogActionProps {
  action: string;
  label?: string;
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  onClick?: () => void;
}

const DialogActionsContext = createContext<DialogActionsContextType | undefined>(undefined);

interface DialogActionsProps {
  children: ReactNode;
  onAction: (action: string) => void;
}

const DialogActions = ({ children, onAction }: DialogActionsProps) => {
  const literals = useLiterals();

  const defaultLiterals = {
    yes: literals['dialog.yes'] || 'Yes',
    no: literals['dialog.no'] || 'No',
    cancel: literals['dialog.cancel'] || 'Cancel',
  };

  return (
    <DialogActionsContext.Provider value={{ literals: defaultLiterals, onAction }}>
      <MuiDialogActions>{children}</MuiDialogActions>
    </DialogActionsContext.Provider>
  );
};

const Action = ({
  action,
  label,
  disabled = false,
  variant = 'text',
  color = 'primary',
  onClick,
}: DialogActionProps) => {
  const context = useContext(DialogActionsContext);
  if (!context) throw new Error('DialogActions.Action must be used within DialogActions');

  const { literals, onAction } = context;
  const buttonLabel = label ?? literals[action] ?? action; // Prioridad: prop > literal por defecto > action

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      onAction(action);
    }
  };

  return (
    <Button onClick={handleClick} disabled={disabled} variant={variant} color={color}>
      {buttonLabel}
    </Button>
  );
};

DialogActions.Action = Action;

export default DialogActions;
