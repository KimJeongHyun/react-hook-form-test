export const handleOnChange = ({value, onChange}:{value:string,onChange:(value:string)=>void}) => {
    onChange(value);
}

export const onSubmit = ({userName,userPhone,gender}:{userName:string,userPhone:string,gender:"M"|"F"}) =>{
  alert(`이름:${userName}, 번호:${userPhone}, 성별:${gender}`)
}