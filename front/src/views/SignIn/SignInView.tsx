"use client";
import FormComponent from "@/components/BodyComponents/FormComponent/FormComponent";
import React from "react";
import {
  ButonsSignInForm,
  InputsFormValues,
  SignInInitialValues,
  SingInSchema,
  TitleFormData,
} from "./SignInData";
import { handelerSubmitSignIn } from "./SignInHandeler";

const SingInView = () => {
  return (
    <section>
      <FormComponent
        iniValues={SignInInitialValues}
        valiSchema={SingInSchema}
        handelerSubmit={handelerSubmitSignIn}
        titleForm={TitleFormData}
        butonsForm={ButonsSignInForm}
        dataContructor={InputsFormValues}
      />
    </section>
  );
};

export default SingInView;
