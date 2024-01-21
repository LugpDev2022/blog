import { useState, ChangeEvent } from 'react';

interface FormState {
  [key: string]: any;
}

interface FormActions {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
}

export const useForm = (
  initialForm: FormState = {}
): FormState & FormActions => {
  const [formState, setFormState] = useState<FormState>(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return { ...formState, onInputChange, onResetForm };
};
