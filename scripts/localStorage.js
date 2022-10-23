export const getLocalStorage = async () => {
    const user = await JSON.parse(localStorage.getItem("user")) || ""

    return user
}
export async function getLocalId(){
    const id = await JSON.parse(localStorage.getItem("userId"));

    return id
}