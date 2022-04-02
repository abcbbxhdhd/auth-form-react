import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyATnv3OkC_oCoUIdG1d8PzxCT7YIsv4p14",
    authDomain: "auth-form-react-1c17d.firebaseapp.com",
    projectId: "auth-form-react-1c17d",
    storageBucket: "auth-form-react-1c17d.appspot.com",
    messagingSenderId: "79707726254",
    appId: "1:79707726254:web:30fc60abb08d816b0f283f"
  };

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export {auth, app}
  