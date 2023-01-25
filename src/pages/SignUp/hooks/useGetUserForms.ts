import { Control, useController } from 'react-hook-form'
import { UserInfoTypes } from '../_types'

export default function useGetUserForms({control}:{control:Control<UserInfoTypes>}){
    const {field:userName} = useController({
        name:"userName",
        control
    })

    const {field:userPhone} = useController({
        name:"userPhone",
        control
    })

    const {field:gender} = useController({
        name:"gender",
        control
    })

    return { userName, userPhone, gender };
}