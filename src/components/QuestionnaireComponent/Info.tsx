import React from "react";

type PropsType = {
    title: string
    desc?: string
}

const Info: React.FC<PropsType> = ({title, desc}) => {

    return (<div className={"text-center"}>
        <div className={"text-3xl"}>{title}</div>
        <p className={"mt-2"}>{desc}</p>
    </div>)
}

export default Info