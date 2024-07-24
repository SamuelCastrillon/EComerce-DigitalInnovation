import {
  IButtonForm,
  IDataConstructorInput,
  ITitleForm,
} from "@/components/BodyComponents/FormComponent/FormInterface";
import * as yup from "yup";
import pageLogo from "@/assets/img/LogoPage.jpg";

export const TitleFormData: ITitleForm = {
  title: "Sing In",
  icone: pageLogo.src,
};

export const SignInInitialValues = {
  userName: "",
  password: "",
};

export const SingInSchema = yup.object({
  userName: yup.string().defined("Required!"),
  password: yup.string().defined("Required!"),
});

export const InputsFormValues: IDataConstructorInput[] = [
  { LabelText: "User Name", FieldType: "text", FieldName: "userName", FieldPH: "UserName..." },
  { LabelText: "Password", FieldType: "password", FieldName: "password", FieldPH: "********" },
];

export const ButonsSignInForm: IButtonForm[] = [{ name: "Sign In", type: "submit" }];
