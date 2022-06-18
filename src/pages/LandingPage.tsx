import React, { useState } from "react";
import InputStates from "./InputStates";

export default function LandingPage() {
  const [gender, setGender] = useState<"M" | "F">("M");

  return (
    <div
      style={{
        padding: "5rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <InputStates />
      <div>
        성별 :
        <label>
          <input
            type="radio"
            checked={gender === "M"}
            onChange={(e) => setGender("M")}
          />
          남자
        </label>
        <label>
          <input
            type="radio"
            checked={gender === "F"}
            onChange={(e) => setGender("F")}
          />
          여자
        </label>
      </div>
    </div>
  );
}
