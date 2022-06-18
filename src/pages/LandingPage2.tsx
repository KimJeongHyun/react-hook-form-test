import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import InputForm from "./InputForm";

export type TForm = {
  userInfo: {
    userName: string;
    password: string;
    gender: "M" | "F" | "";
  };
};

export default function LandingPage2() {
  const methods = useForm<TForm>({
    defaultValues: {
      userInfo: {
        userName: "",
        password: "",
        gender: "",
      },
    },
  });

  return (
    <div
      style={{
        padding: "5rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormProvider {...methods}>
        <InputForm />
      </FormProvider>
    </div>
  );
}
