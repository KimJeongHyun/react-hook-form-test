import React from "react";
import { useForm } from "react-hook-form";
import { useGetUserForms } from "../hooks"
;
import { handleOnChange, onSubmit } from "../utils";
import { ConfirmButton, ConfirmButtonArea, GenderBlock, InputBlock, UserInputContainer } from "../_styled";

import { UserInfoTypes } from "../_types";

export default function InputForm() {
  const methods = useForm<UserInfoTypes>({
    defaultValues:{
      userName:"",
      userPhone:"",
      gender:"M"
    }
  })

  const {userName, userPhone, gender} = useGetUserForms({control:methods.control})

  return (
    <UserInputContainer>
        <InputBlock>
          이름: <input value={userName.value} 
                  onChange={(e)=>handleOnChange({value:e.target.value,onChange:userName.onChange})}
                  placeholder="이름을 입력해주세요."  
                />
        </InputBlock>
        <InputBlock>
          전화번호: <input value={userPhone.value} 
                  onChange={(e)=>handleOnChange({value:e.target.value,onChange:userPhone.onChange})}
                  placeholder="핸드폰 번호를 입력해주세요."  
                />
        </InputBlock>
        <GenderBlock>
          <label>남성</label>
          <input type="radio" value={"M"} 
                  onChange={(e)=>handleOnChange({value:e.target.value,onChange:gender.onChange})} 
                  checked={gender.value==="M"}/>
        </GenderBlock>
        <GenderBlock>
          <label>여성</label>
          <input type="radio" value={"F"} 
                  onChange={(e)=>handleOnChange({value:e.target.value,onChange:gender.onChange})} 
                  checked={gender.value==="F"}/>
        </GenderBlock>
        <ConfirmButtonArea>
          <ConfirmButton 
              onClick={()=>onSubmit({userName:userName.value,userPhone:userPhone.value,gender:gender.value})}
          >
            등록
          </ConfirmButton>
        </ConfirmButtonArea>
    </UserInputContainer>
  );
}

