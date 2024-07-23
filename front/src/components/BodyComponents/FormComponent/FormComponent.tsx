"use client";
import React from "react";
import { Form, Formik } from "formik";
import { IButtonForm, Icheckbox, IDataConstructorInput, IFormikConstructor } from "./FormInterface";
import ImputForm from "./ImputForm/ImputForm";
import TitleForm from "./TitleForm/TitleForm";
import ButtonForm from "./ButtonForm/ButtonForm";

const FormComponent: React.FC<IFormikConstructor> = ({
  iniValues,
  valiSchema,
  handelerSubmit,
  titleForm,
  butonsForm,
  dataContructor,
  dataCheckbox,
}) => {
  const fieldsForm: IDataConstructorInput[] = dataContructor;
  const checkBox: Icheckbox[] = dataCheckbox;
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
          {/* {
            checkBox.length > 0 && (
              <div className="">
              {checkBox.map((data, i)=>{
                return <input key={i} type={data.type} />
              })}
              </div>)
          } */}

          {butonsForm.map((data, i) => {
            return <ButtonForm key={i} name={data.name} type={data.type} />;
          })}
        </Form>
      </Formik>
    </>
  );
};

export default FormComponent;
