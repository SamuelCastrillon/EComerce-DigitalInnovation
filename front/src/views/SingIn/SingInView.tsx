"use client";
import FormComponent from "@/components/BodyComponents/FormComponent/FormComponent";
import React from "react";
import { InputsFormValues, SingInInitialValues, SingInSchema } from "./SingInViewData";

const SingInView = () => {
  async function handelerSubmit(data: string) {
    console.log(data);
  }
  return (
    <section>
      <FormComponent
        iniValues={SingInInitialValues}
        valiSchema={SingInSchema}
        handelerSubmit={handelerSubmit}
        dataContructor={InputsFormValues}
      />
    </section>
  );
};

export default SingInView;
