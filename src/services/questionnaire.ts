import {get} from "@/services/ajax";


export async function getQuestionnaireById(id: string){
  const url = `/api/questionnaire/${id}`
  const data = await get(url)
  return data
}