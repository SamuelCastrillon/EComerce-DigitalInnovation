import { ErrorMessage, Field } from "formik";
import React from "react";
import { IDataConstructorInput } from "../FormInterface";

const ImputForm: React.FC<IDataConstructorInput> = ({
  LabelText,
  FieldType,
  FieldName,
  FieldPH,
}) => {
  return (
    <div className="flex flex-col h-[80px]">
      <label className="">{LabelText}</label>
      <Field type={FieldType} name={FieldName} placeholder={FieldPH} className=""></Field>
      <span className="font-bold text-red-600">
        <ErrorMessage name={FieldName} />
      </span>
    </div>
  );
};

export default ImputForm;
