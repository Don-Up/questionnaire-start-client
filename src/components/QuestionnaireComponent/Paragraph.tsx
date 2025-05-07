import React, {CSSProperties} from "react";

type PropsType = {
    text: string;
    isCenter?: boolean;
}

const Paragraph: React.FC<PropsType> = ({text, isCenter}) => {

    const style: CSSProperties = {}
    if (isCenter) style.textAlign = "center"

    const textList = text.split("\n")

    return <p>{textList.map((t, index) => <span key={index}>
        {t}
        {index !== textList.length - 1 && <br/>}
    </span>)}</p>
}

export default Paragraph