import Input from "@/components/QuestionnaireComponent/Input";
import React from "react";
import Radio from "@/components/QuestionnaireComponent/Radio";
import Title from "@/components/QuestionnaireComponent/Title";
import Paragraph from "@/components/QuestionnaireComponent/Paragraph";
import Info from "@/components/QuestionnaireComponent/Info";
import Textarea from "@/components/QuestionnaireComponent/Textarea";

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

    if(type === "paragraph"){
        return <Paragraph {...props}/>
    }

    if(type === "info"){
        return <Info {...props}/>
    }

    if(type === "textarea"){
        return <Textarea uuid={uuid} props={props}/>
    }

    return null
}