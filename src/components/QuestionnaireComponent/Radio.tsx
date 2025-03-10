import React from "react";

type PropsType = {
    uuid: string,
    props: {
        title: string,
        options: Array<{
            value: string,
            text: string
        }>,
        value: string,
        isVertical: boolean
    },
}
const Radio: React.FC<PropsType> = ({uuid, props}) => {
    const {title, options, value, isVertical} = props

    return (<>
        <p>{title}</p>
        <ul className={"p-0 list-none"}>
            {options.map((option) => {
                const className = `${isVertical ? "mb-[10px]" : "mr-[10px] inline-block"}`
                return (<li className={className} key={option.value}>
                    <label>
                        <input type="radio" id={option.value} name={uuid} value={option.value}
                               defaultChecked={option.value === value}/>
                        {option.text}
                    </label>
                </li>)
            })}
        </ul>
    </>)
}

export default Radio