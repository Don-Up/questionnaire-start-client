
const HOST = "http://localhost:3000"
export async function get(url: string){
    const res = await fetch(`${HOST}${url}`)
    return res.json()
}

export async function post(url: string, data: any){
    const res = await fetch(`${HOST}${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return res.json()
}