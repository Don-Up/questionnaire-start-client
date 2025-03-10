import Input from "@/components/QuestionnaireComponent/Input";

type PropsType = {
    id: string
}

export default function QuestionnairePage(props: PropsType) {
  return (
    <div>
        <p>{props.id}</p>
        <form>
            <Input uuid={"c1"} props={{title: "Name", placeholder: "Enter your name"}}/>
        </form>
    </div>
  );
}
