import React, {CSSProperties} from "react";

type PropsType = {
    text: string
    level: 1 | 2 | 3
    isCenter?: boolean
}
const Title: React.FC<PropsType> = ({text, level, isCenter}) => {
    const style: CSSProperties = {}

    if(isCenter) style.textAlign = "center"

    if(level === 1) return <div style={style} className={"text-4xl"}>{text}</div>
    if(level === 2) return <div style={style} className={"text-2xl"}>{text}</div>
    if(level === 3) return <div style={style} className={"text-xl"}>{text}</div>

    return null
}

export default Title