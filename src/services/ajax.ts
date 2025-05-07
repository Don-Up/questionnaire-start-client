
const HOST = "http://localhost:3000"
export async function get(url: string){
    const res = await fetch(`${HOST}${url}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlleHVkb25nMTk4QGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNzM3MDk4ODU1LCJleHAiOjE3MzcxMDI0NTV9.RYrrLgflasBIRolSX1AM1GY89FT111pHoFn0lZovWSk"
        }
    })
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