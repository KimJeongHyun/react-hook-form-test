import React from "react";

import { Controller, useFormContext, useWatch } from "react-hook-form";
import { TForm } from "./LandingPage2";

export default function InputForm() {
  const { control } = useFormContext<TForm>();

  return (
    <>
      <Controller
        name="userInfo.userName"
        control={control}
        render={({ field }) => (
          <div>
            유저이름 :{" "}
            <input
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </div>
        )}
      />

      <Controller
        name="userInfo.password"
        control={control}
        render={({ field }) => (
          <div>
            패스워드 :{" "}
            <input
              type="password"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </div>
        )}
      />

      <Controller
        name="userInfo.gender"
        control={control}
        render={({ field }) => (
          <div>
            성별:
            <label>
              <input
                type="radio"
                onChange={(e) => field.onChange("M")}
                checked={field.value === "M"}
              />
              남자
            </label>
            <label>
              <input
                type="radio"
                onChange={(e) => field.onChange("F")}
                checked={field.value === "F"}
              />
              여자
            </label>
          </div>
        )}
      />
      <GetInfo />
    </>
  );
}

function GetInfo() {
  const { control } = useFormContext<TForm>();
  const userInfo = useWatch({
    control,
    name: "userInfo",
  });
  return (
    <>
      <p>{userInfo.userName}</p>
      <p>{userInfo.password}</p>
      <p>{userInfo.gender}</p>
    </>
  );
}
