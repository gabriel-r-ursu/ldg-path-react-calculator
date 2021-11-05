import { Dispatch, SetStateAction } from 'react';

export interface ButtonsProps {
  input: any;
  setInput: Dispatch<SetStateAction<string>>;
  buttonProperties?: any;
}
