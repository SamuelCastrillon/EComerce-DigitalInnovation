"use client";
import FormComponent from "@/components/BodyComponents/FormComponent/FormComponent";
import React, { useContext } from "react";
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
import { AuthContext } from "@/components/Context/GlobalContext";

const SingInView = () => {
  const router = useRouter();
  const { setCurrentUser } = useContext(AuthContext);

  async function handelerSubmit(data: IUserSignIn) {
    const response = await postSubmitSignIn(data);
    if (response.login) {
      localData.saveStorage(localData.userData, response.user.id, response);
      setCurrentUser(response);
      router.push("/dashboard");
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
