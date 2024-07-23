"use client";
import React from "react";
import { Form, Formik } from "formik";
import { IButtonForm, IDataConstructorInput, IFormikConstructor } from "./FormInterface";
import ImputForm from "./ImputForm/ImputForm";
import TitleForm from "./TitleForm/TitleForm";

const FormComponent: React.FC<IFormikConstructor> = ({
  iniValues,
  valiSchema,
  handelerSubmit,
  titleForm,
  butonsForm,
  dataContructor,
}) => {
  const fieldsForm: IDataConstructorInput[] = dataContructor;
  const buttonsForm: IButtonForm[] = butonsForm;
  return (
    <>
      <TitleForm title={titleForm.title} icone={titleForm.icone} />
      <Formik initialValues={iniValues} validationSchema={valiSchema} onSubmit={handelerSubmit}>
        <Form className="flex flex-wrap w-[600px] gap-4 p-5 m-5 justify-evenly bg-gray-300 rounded-md">
          {fieldsForm.length > 0 &&
            fieldsForm.map((fileld, i) => {
              return (
                <ImputForm
                  key={i}
                  LabelText={fileld.LabelText}
                  FieldName={fileld.FieldName}
                  FieldType={fileld.FieldType}
                  FieldPH={fileld.FieldPH}
                />
              );
            })}
        </Form>
      </Formik>
    </>
  );
};

export default FormComponent;
