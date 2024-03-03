"use client";

import React from "react";

import { useForm } from "react-hook-form";
import ClearButton from "../Button/ClearButton";
import SubmitButton from "../Button/SubmitButton";
import { cloneDeep, isEqual } from "lodash";

function comparePayload(payload, defaultValues) {
  const preparedPayload = cloneDeep(payload);

  Object.keys(preparedPayload).forEach((key) => {
    if (
      preparedPayload[key] == defaultValues[key] ||
      isEqual(preparedPayload[key], defaultValues[key])
    ) {
      delete preparedPayload[key];
    }
  });

  return preparedPayload;
}

function Form({
  children,
  alias = "",
  addAPI = "",
  editAPI = "",
  className = "",
  formType = "add",
  isLoading = false,
  extraState = {},
  defaultValues = {},
  onClear = () => {},
  modifyExistingPayload = () => {},
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    const payload = { ...data, ...extraState };
    let modifiedPayload = payload;

    if (typeof modifyExistingPayload === "function") {
      modifiedPayload = modifyExistingPayload(payload);
    }

    if (editAPI) {
      const preparedPayload = comparePayload(modifiedPayload, defaultValues);
      if (Object.keys(preparedPayload).length) {
        modifiedPayload = preparedPayload;
      }
    }

    const onSuccess = () => {
      console.log("success");
    };

    const onError = () => {
      console.log("error");
    };

    const onFinally = () => {
      console.log("finally");
    };

    if (formType === "add") {
      addAPI(modifiedPayload)
        .then(onSuccess)
        .then(onError)
        .onFinally(onFinally);
    }
  };

  const handleClear = () => {
    reset();
    onClear();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children({ control, errors, watch, setValue, reset })}
      <div
        className={`flex justify-between items-center my-3 px-2 ${
          className ? className : ""
        }
      `}
      >
        <ClearButton onClick={() => handleClear()}>Clear Form</ClearButton>
        <SubmitButton type="submit" />
      </div>
    </form>
  );
}

export default Form;
