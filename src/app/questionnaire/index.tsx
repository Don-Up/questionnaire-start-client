import Input from "@/components/QuestionnaireComponent/Input";
import React from "react";
import Radio from "@/components/QuestionnaireComponent/Radio";
import Title from "@/components/QuestionnaireComponent/Title";

type ComponentInfoType = {
    uuid: string;
    type: string;
    isHidden: string;
    props: any;
}

export const getComponent = (comp: ComponentInfoType) => {
    const { uuid, type, isHidden, props } = comp

    if(isHidden) return null

    if(type === "input"){
        return <Input uuid={uuid} props={props}/>
    }

    if(type === "radio"){
        return <Radio uuid={uuid} props={props}/>
    }

    if(type === "title"){
        return <Title {...props}/>
    }

    return null
}