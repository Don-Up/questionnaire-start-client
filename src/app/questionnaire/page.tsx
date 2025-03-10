import Input from "@/components/QuestionnaireComponent/Input";
import Radio from "@/components/QuestionnaireComponent/Radio";
import React from "react";

type PropsType = {
    id: string
}

export default function QuestionnairePage(props: PropsType) {

    const border = <div className={"border border-solid border-[#f1f1f1]"}></div>

    return (
        <div>
            <p>{props.id}</p>
            <form action={"/api/answer"} method={"post"}>
                <input type={"hidden"} name={"id"} value={props.id}/>
                <Input uuid={"c1"} props={{title: "Name", placeholder: "Enter your name"}}/>
                {border}
                <Radio uuid={"c2"} props={{
                    title: "Gender",
                    options: [
                        {value: "male", text: "Male"},
                        {value: "female", text: "Female"},
                        {value: "other", text: "Other"}
                    ],
                    value: "male",
                    isVertical: true
                }}/>
                {border}
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
