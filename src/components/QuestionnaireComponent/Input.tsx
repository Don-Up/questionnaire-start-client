import React from "react";

type PropsType = {
    uuid: string
    props: {
        title: string
        placeholder?: string
    }
}

const Input: React.FC<PropsType> = ({uuid, props: { title, placeholder }}) => {

    return (<>
        <p>{title}</p>
        <div className={"mb-4 px-1"}>
            <input
                type="text"
                name={uuid}
                className={"w-full border border-solid border-[#d8d8d8] rounded-[3px] py-[6px] px-[12px]"}
                placeholder={placeholder}/>
        </div>
    </>)
}

export default Input