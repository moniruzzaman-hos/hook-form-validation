"use client";

import Form from "@/components/Form/Form";
import CheckBox from "@/components/Inputs/CheckBox";
import Label from "@/components/Inputs/Label";
import PasswordInput from "@/components/Inputs/PasswordInput";
import RadioGroup from "@/components/Inputs/RadioGroup";
import TextArea from "@/components/Inputs/TextArea";
import TextInput from "@/components/Inputs/TextInput";
import ErrorMessage from "@/components/Message/ErrorMessage";
import Modal from "@/components/Modal/Modal";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";

import { Controller } from "react-hook-form";

function Home() {
  const [open, setOpen] = useState(false);
  const modifyExistingPayload = (payload) => {
    console.log(payload);
    return payload;
  };
  console.log(open);
  const onClose = () => {
    setOpen(false);
  };
  const abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <main className="">
      <Sidebar />
      <div className="grid grid-cols-[0.5fr_0.7fr_1fr_1fr_1fr_1.2fr_1fr_1fr_1.2fr_1fr]">
        {abc.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <button
        className="w-32 h-16 text-center rounded-lg hover:bg-opacity-80 bg-red-500"
        onClick={() => setOpen(true)}
      >
        open modal
      </button>
      <Modal isOpen={open} onClose={onClose}>
        <Form
          alias=""
          addAPI=""
          editAPI=""
          className=""
          isLoading={false}
          extraState={""}
          defaultValues={""}
          onClear={console.log("")}
          modifyExistingPayload={modifyExistingPayload}
        >
          {({ control, errors, watch, setValue, reset }) => {
            return (
              <div className="flex flex-col">
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    maxLength: {
                      value: 50,
                      message: "Max length is 50 characters",
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className="my-3 flex flex-col">
                        <Label>First Name</Label>
                        <TextInput
                          type="text"
                          value={value}
                          placeholder="Enter your First Name"
                          error={errors.firstName}
                          disabled={false}
                          required={false}
                          isClearable={false}
                          canNegativeNumber={true}
                          onChange={onChange}
                        />
                        {errors.firstName && (
                          <ErrorMessage message={errors.firstName.message} />
                        )}
                      </div>
                    );
                  }}
                />
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    maxLength: {
                      value: 50,
                      message: "Max length is 50 characters",
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className="my-3 flex flex-col">
                        <Label>Last Name</Label>
                        <TextInput
                          type="text"
                          value={value}
                          placeholder="Enter your Last Name"
                          error={errors.lastName}
                          disabled={false}
                          required={false}
                          isClearable={false}
                          canNegativeNumber={true}
                          onChange={onChange}
                        />
                        {errors.lastName && (
                          <ErrorMessage message={errors.lastName.message} />
                        )}
                      </div>
                    );
                  }}
                />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
                      message: "Invalid email address",
                    },
                    maxLength: {
                      value: 50,
                      message: "Max length is 50 characters",
                    },
                    minLength: {
                      value: 5,
                      message: "Min length is 5 characters",
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className="my-3 flex flex-col">
                        <Label>Email</Label>
                        <TextInput
                          type="text"
                          value={value}
                          placeholder="Enter your Email"
                          error={errors.email}
                          disabled={false}
                          required={false}
                          isClearable={false}
                          canNegativeNumber={true}
                          onChange={onChange}
                        />
                        {errors.email && (
                          <ErrorMessage message={errors.email.message} />
                        )}
                      </div>
                    );
                  }}
                />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    maxLength: {
                      value: 50,
                      message: "Max length is 50 characters",
                    },
                    minLength: {
                      value: 5,
                      message: "Min length is 5 characters",
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className="my-3 flex flex-col">
                        <Label>Password</Label>
                        <PasswordInput
                          value={value}
                          placeholder="Enter your Password"
                          error={errors.password}
                          disabled={false}
                          required={false}
                          onChange={onChange}
                        />
                        {errors.password && (
                          <ErrorMessage message={errors.password.message} />
                        )}
                      </div>
                    );
                  }}
                />
                <Controller
                  name="textarea"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    maxLength: {
                      value: 50,
                      message: "Max length is 50 characters",
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className="my-3 flex flex-col">
                        <Label>Text Area</Label>
                        <TextArea
                          value={value}
                          placeholder="Enter your Text"
                          error={errors.textarea}
                          disabled={false}
                          required={false}
                          onChange={onChange}
                        />
                        {errors.textarea && (
                          <ErrorMessage message={errors.textarea.message} />
                        )}
                      </div>
                    );
                  }}
                />
                <Controller
                  name="radio"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className="my-3 flex flex-col">
                        <Label>Radio</Label>
                        <RadioGroup
                          value={value}
                          groupname="radio"
                          disabled={false}
                          items={[
                            {
                              label: "Option 1",
                              value: "option1",
                              id: "option1",
                            },
                            {
                              label: "Option 2",
                              value: "option2",
                              id: "option2",
                            },
                          ]}
                          onChange={onChange}
                        />
                        {errors.radio && (
                          <ErrorMessage message={errors.radio.message} />
                        )}
                      </div>
                    );
                  }}
                />

                <Controller
                  name="checkbox"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className="my-3 flex flex-col">
                        <Label>Checkbox</Label>
                        <CheckBox
                          label="Check me"
                          checked={value}
                          onChange={() => onChange(!value)}
                        />
                        {errors.checkbox && (
                          <ErrorMessage message={errors.checkbox.message} />
                        )}
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        </Form>
      </Modal>
    </main>
  );
}

export default Home;
