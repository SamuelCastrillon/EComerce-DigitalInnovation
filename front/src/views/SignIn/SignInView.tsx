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
import { useRouter } from "next/navigation";

const SingInView = () => {
  const router = useRouter();

  async function handelerSubmit(data: IUserSignIn) {
    const response = await postSubmitSignIn(data);
    if (response.login) {
      localData.saveStorage("userData", response);
      router.push("/home");
    }
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
