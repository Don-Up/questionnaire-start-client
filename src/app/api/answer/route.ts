// create a POST

import {redirect} from "next/navigation";
import {postAnswer} from "@/services/anwser";

/**
 * Generates an object containing an ID and a list of answers from the provided form data.
 *
 * @param formData - The form data to process.
 * @returns An object with 'id' and 'answerList' properties.
 */
function genAnswerInfo(formData: any) {
  const answerList: any[] = [];
  for (const [key, value] of formData.entries()) {
    if (key !== "id") {
      answerList.push({
        componentId: key,
        value,
      });
    }
  }

  return {
    id: formData.get("id"),
    answerList,
  };
}

/**
 * Handles POST requests to submit answers.
 *
 * @param request - The incoming HTTP request.
 * @returns A response redirecting to either a success or failure page based on the result.
 */
export async function POST(request: Request) {
  const form = await request.formData();

  /*
     { id: '1', c1: 'Ye XuDong', c2: 'male' }
     {
        id: '1',
        answerList: [
          { componentId: 'c1', value: 'Ye XuDong' },
          { componentId: 'c2', value: 'male' }
        ]
      }
   */
  console.log(form, genAnswerInfo(form))

  const res = await postAnswer(genAnswerInfo(form));

  if (res.errno === 0) {
    redirect("/success");
  } else {
    redirect("/failure");
  }
}
