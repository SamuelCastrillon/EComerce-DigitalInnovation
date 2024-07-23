import * as yup from "yup";

export interface IInputsFormValues {
  LabelText: string;
  FieldType: string;
  FieldName: string;
  FieldPH: string;
}

export const SignInInitialValues = {
  userName: "",
  password: "",
};

export const SingInSchema = yup.object({
  userName: yup.string().defined("Required!"),
  password: yup.string().defined("Required!"),
});

export const InputsFormValues: IInputsFormValues[] = [
  { LabelText: "User Name", FieldType: "text", FieldName: "userName", FieldPH: "UserName..." },
  { LabelText: "Password", FieldType: "password", FieldName: "password", FieldPH: "********" },
];
