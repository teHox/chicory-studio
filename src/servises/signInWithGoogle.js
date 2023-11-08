import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase";

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    try {
        const result = await signInWithPopup(auth, provider);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("User registered successfully");
    } catch (error) {
        const errorMessage = error.message;
        alert("errorMessage:" + errorMessage);
    }
};

export { signInWithGoogle };
