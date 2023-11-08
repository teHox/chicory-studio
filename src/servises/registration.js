import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Cookies from "js-cookie";
import { app } from "./firebase";
  
const registration  = async (userData) => {
    
    if (!userData.username ) {
        alert('Username field is missing');
        return;
    }
    if (userData.password !== userData.passwordConfirm) {
        alert('Your passwords do not match');
    } else {
        try {
            const auth = getAuth(app);
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;
            try {
                await updateProfile(user, {
                  displayName: userData.username,
                });
              } catch (error) {
                alert(error.message);
              }
            const updatedUser = {
                userName: user.displayName,
                email: user.email,
            }
            Cookies.set('user', JSON.stringify(updatedUser));
        } catch (error) {
            alert(error);
        }
    }
}

export { registration };