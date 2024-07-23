import {
  IButtonForm,
  IDataConstructorInput,
  ITitleForm,
} from "@/components/BodyComponents/FormComponent/FormInterface";
import * as yup from "yup";

export const TitleFormData: ITitleForm = {
  title: "Create Account",
  icone: "URL",
};

export const SignInInitialValues = {
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
};

export const SingInSchema = yup.object({
  name: yup.string().defined("Required!"),
  email: yup.string().defined("Required!"),
  password: yup.string().defined("Required!"),
  address: yup.string().defined("Required!"),
  phone: yup.string().defined("Required!"),
});

export const InputsFormValues: IDataConstructorInput[] = [
  { LabelText: "User Name", FieldType: "text", FieldName: "name", FieldPH: "UserName..." },
  { LabelText: "Email", FieldType: "email", FieldName: "email", FieldPH: "example@mail.com" },
  { LabelText: "Password", FieldType: "password", FieldName: "password", FieldPH: "********" },
  { LabelText: "Address", FieldType: "address", FieldName: "address", FieldPH: "address" },
  { LabelText: "Phone", FieldType: "phone", FieldName: "phone", FieldPH: "00000000" },
];

export const ButonsSignInForm: IButtonForm[] = [{ name: "Create Account", type: "submit" }];
