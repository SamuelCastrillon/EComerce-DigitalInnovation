"use client";
import React from "react";
import { Form, Formik } from "formik";
import { IDataConstructorInput, IFormikConstructor } from "./FormInterface";
import ImputForm from "./ImputForm/ImputForm";

const FormComponent: React.FC<IFormikConstructor> = ({
  iniValues,
  valiSchema,
  handelerSubmit,
  dataContructor,
}) => {
  const fieldsForm: IDataConstructorInput[] = dataContructor;

  return (
    <Formik initialValues={iniValues} validationSchema={valiSchema} onSubmit={handelerSubmit}>
      <Form>
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
  );
};

export default FormComponent;
