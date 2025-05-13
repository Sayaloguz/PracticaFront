import { InputHTMLAttributes } from "react";

export interface InputFloatingLabelProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}
