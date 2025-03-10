import Input from "@/components/QuestionnaireComponent/Input";
import Radio from "@/components/QuestionnaireComponent/Radio";

type PropsType = {
    id: string
}

export default function QuestionnairePage(props: PropsType) {
  return (
    <div>
        <p>{props.id}</p>
        <form>
            <Input uuid={"c1"} props={{title: "Name", placeholder: "Enter your name"}}/>
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
            <Radio uuid={"c3"} props={{
                title: "Gender1",
                options: [
                    {value: "male", text: "Male"},
                    {value: "female", text: "Female"},
                    {value: "other", text: "Other"}
                ],
                value: "male",
                isVertical: false
            }}/>
        </form>
    </div>
  );
}
