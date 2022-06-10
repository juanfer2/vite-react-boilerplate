import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { InputStyled } from './Input.styles';

interface Props {
  name: string;
  label?: string;
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | undefined;
  focused?: true;
  errorMessage?: string;
}

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important' // override inline-style
  }
});

function Input({ name, label, color, focused, errorMessage }: Props) {
  return (
    <InputStyled>
      <ValidationTextField label={name} variant="outlined" defaultValue={'sucess'} />
      {errorMessage && <p>{errorMessage}</p>}
    </InputStyled>
  );
}

Input.defaultProps = {
  label: null,
  color: null,
  focused: false,
  errorMessage: null
};

export default Input;
