import {useEffect, useState} from "react";
import {GoogleAuthProvider, signInWithPopup, type User} from "firebase/auth";
import {firebaseAuth} from "@/firebase";

export function useGoogleAuth() {

    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);

    const signIntoGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(firebaseAuth, provider)
            .then((result) => {
                const user = result.user;

                if (user) {
                    console.log(`Signed in as ${user.displayName}`);
                } else {
                    console.log(`Unable to get user from sign in result.`);
                }
            }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error logging in`, errorCode, errorMessage)

        });
    }

    return {
        currentUser,
        signIn: signIntoGoogle,
        signOut: () => firebaseAuth.signOut()
    }
}
