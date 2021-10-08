import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth"

const app = initializeApp({
    apiKey: "AIzaSyBgKQiuSJ3HqgyZyeDnIXnJEBajyaMwEYc",
    authDomain: "bestlifecounseling-1c2f7.firebaseapp.com",
    projectId: "bestlifecounseling-1c2f7",
    storageBucket: "bestlifecounseling-1c2f7.appspot.com",
    messagingSenderId: "177368405011",
    appId: "1:177368405011:web:fca7316a94c3c7828adbe6"
})

export const auth = getAuth()
export default app