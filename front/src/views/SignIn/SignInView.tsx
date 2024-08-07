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
import { useRouter } from "next/navigation";
import { AuthContext } from "@/helpers/Context/GlobalContext";
import { NavigateButton } from "@/components/PublicComponents/Buttons/NavigateButton/NavigateButton";
import { useCookies } from "react-cookie";
import { IUserLoginRes } from "@/helpers/interfaces/user.interface";
import { saveCurrentUser } from "@/helpers/localStorageManager";

const SingInView = () => {
  const router = useRouter();
  const { setCurrentUser } = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["userSignIn"]);

  async function handelerSubmit(data: IUserSignIn) {
    const response: IUserLoginRes = await postSubmitSignIn(data);

    if (response.login) {
      setCookie("userSignIn", response.login);
      // localData.saveStorage(localData.userData, "", response);
      saveCurrentUser(response);
      setCurrentUser(response);
      router.push("/home");
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
