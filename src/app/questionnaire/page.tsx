import Input from "@/components/QuestionnaireComponent/Input";
import Radio from "@/components/QuestionnaireComponent/Radio";
import React from "react";
import {getQuestionnaireById} from "@/services/questionnaire";
import {getComponent} from "@/app/questionnaire/index";

type PropsType = {
    id: string
}


export default async function QuestionnairePage(props: PropsType) {

    const border = <div className={"border border-solid border-[#f1f1f1]"}></div>

    
    const {errno, data} = await getQuestionnaireById(props.id)
    const { isDeleted, isPublished, components } = data

    if(errno !== 0 || isDeleted || !isPublished){
        return <div>
            <p>{errno}</p>
        </div>
    }
    
    const ComponentListElem = <>
    {
        components.map((comp: any) => {
            const Component = getComponent(comp)
            return <div key={comp.uuid} className={"mt-[20px]"}>{Component}</div>
        })
    }
    </>

    return (
        <div className={"w-[500px] mx-auto my-[100px]"}>
            <form action={"/api/answer"} method={"post"}>
                {/*
                a hidden input used to store the id of the questionnaire for submission
                */}
                <input type={"hidden"} name={"id"} value={props.id}/>

                {ComponentListElem}

                <div className={"text-center m-4"}>
                    <button type={"submit"}
                            className={"text-white bg-[#1677ff] border border-solid border-transparent py-1 px-4 rounded-[3px]"}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
