import {ChangeEvent, useState} from "react";

type UseInputReturnType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function useInput(defaultValue: string = ''): UseInputReturnType {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  }
}
