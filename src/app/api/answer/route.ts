// create a POST

import {redirect} from "next/navigation";
import {postAnswer} from "@/services/anwser";

function genAnswerInfo(formData: any){
    const answerList: any[] = []
    for (const [key, value] of formData.entries()) {
        if(key !== "id"){
            answerList.push({
                componentId: key,
                value
            })
        }
    }

    return {
        id: formData.get("id"),
        answerList
    }
}
export async function POST(request: Request) {
    const form = await request.formData()
    
    const res = await postAnswer(genAnswerInfo(form))
    
    if(res.errno === 0){
        redirect("/success")
    } else {
        redirect("/failure")
    }
}