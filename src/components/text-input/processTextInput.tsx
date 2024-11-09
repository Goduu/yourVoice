import { validateApiReturnObject } from "@/lib/validateApiReturnObject";

export const transformInputIntoData = async (text: string) => {
    const apiResult = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    })
    console.log('apiResult', apiResult)

    const validatedResponse = validateApiReturnObject(await apiResult.json());

    console.log('validatedResponse', validatedResponse)

    return validatedResponse;

}