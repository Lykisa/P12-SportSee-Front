import { MOCK_USER_MAIN_DATA, MOCK_USER_ACTIVITY,  MOCK_USER_AVERAGE_SESSIONS, MOCK_USER_PERFORMANCE } from '../data/data'

async function fetchGet(url) {
    const data = await fetch(url)
    const response = await data.json()
    return response.data
}

console.log(import.meta.env.VITE_API)

const USER_MAIN_DATA = (import.meta.env.VITE_API == 1) ? await fetchGet(`http://localhost:3000/user/${import.meta.env.VITE_ID}`) : MOCK_USER_MAIN_DATA.filter(mainData => mainData.id == import.meta.env.VITE_ID)[0]

const USER_ACTIVITY = (import.meta.env.VITE_API == 1) ? await fetchGet(`http://localhost:3000/user/${import.meta.env.VITE_ID}/activity`) : MOCK_USER_ACTIVITY.filter(mainData => mainData.userId == import.meta.env.VITE_ID)[0]

const USER_AVERAGE_SESSIONS = (import.meta.env.VITE_API == 1) ? await fetchGet(`http://localhost:3000/user/${import.meta.env.VITE_ID}/average-sessions`) : MOCK_USER_AVERAGE_SESSIONS.filter(mainData => mainData.userId == import.meta.env.VITE_ID)[0]

const USER_PERFORMANCE = (import.meta.env.VITE_API == 1) ? await fetchGet(`http://localhost:3000/user/${import.meta.env.VITE_ID}/performance`) : MOCK_USER_PERFORMANCE.filter(mainData => mainData.userId == import.meta.env.VITE_ID)[0]

export{
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
}