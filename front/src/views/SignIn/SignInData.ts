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
  email: "",
  password: "",
};

export const SingInSchema = yup.object({
  email: yup
    .string()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Invalid email")
    .defined("Required!"),
  password: yup.string().defined("Required!"),
});

export const InputsFormValues: IDataConstructorInput[] = [
  {
    LabelText: "User Email",
    FieldType: "email",
    FieldName: "email",
    FieldPH: "example@mail.com",
  },
  { LabelText: "Password", FieldType: "password", FieldName: "password", FieldPH: "********" },
];

export const ButonsSignInForm: IButtonForm[] = [{ name: "Sign In", type: "submit" }];
