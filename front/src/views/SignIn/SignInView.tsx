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
import { AuthContext } from "@/helpers/Context/GlobalContext";
import { NavigateButton } from "@/components/PublicComponents/Buttons/NavigateButton/NavigateButton";

const SingInView = () => {
  const router = useRouter();
  const { setCurrentUser } = useContext(AuthContext);

  async function handelerSubmit(data: IUserSignIn) {
    const response = await postSubmitSignIn(data);

    if (response.login) {
      localData.saveStorage(localData.userData, "", response);
      setCurrentUser(response);
      router.back();
    }
  }

  return (
    <section className="flex flex-col items-center">
      <FormComponent
        iniValues={SignInInitialValues}
        valiSchema={SingInSchema}
        handelerSubmit={handelerSubmit}
        titleForm={TitleFormData}
        butonsForm={ButonsSignInForm}
        dataContructor={InputsFormValues}
      />
      <div className="flex items-center gap-5">
        <strong>Need an account?</strong>
        <NavigateButton
          href="/createAccount"
          className="rounded-md bg-lime-950 w-full h-fit py-[5px] px-[10px] text-sm/6 font-semibold text-white hover:bg-lime-800">
          Create a new account
        </NavigateButton>
      </div>
    </section>
  );
};

export default SingInView;
