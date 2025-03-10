import {post} from "@/services/ajax";

export async function postAnswer(answerInfo: any){
    const url = "/api/stat/answer"
    const data = await post(url, answerInfo)
    console.log(data)
    return data
}