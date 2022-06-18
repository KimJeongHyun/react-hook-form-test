import React, { useState } from "react";

export default function InputStates() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <div>
        이름 :{" "}
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        비밀번호 :{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </>
  );
}
