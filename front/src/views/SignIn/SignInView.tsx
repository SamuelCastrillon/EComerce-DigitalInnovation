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
import { IUserSignIn, postSubmitSignIn } from "./SignInHandeler";
import { localData } from "@/helpers/classManagementLocalSotorage";

const SingInView = () => {
  async function handelerSubmit(data: IUserSignIn) {
    const response = await postSubmitSignIn(data);
    localData.saveStorage("userData", response);
  }

  return (
    <section>
      <FormComponent
        iniValues={SignInInitialValues}
        valiSchema={SingInSchema}
        handelerSubmit={handelerSubmit}
        titleForm={TitleFormData}
        butonsForm={ButonsSignInForm}
        dataContructor={InputsFormValues}
      />
    </section>
  );
};

export default SingInView;
