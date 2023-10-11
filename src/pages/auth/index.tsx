import { signInWithPopup } from "firebase/auth"
import { memo, useCallback } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { auth, provider } from "../../config/firebase-config"
import { useGetUserInfo } from "../../hooks/use-get-user-info"
import './styles.css'

export const LoginPage = memo(() => {

    const navigate = useNavigate()
    const userInfo = useGetUserInfo();

    const signInWithGoogle = useCallback(async () => {
        try {
            const results = await signInWithPopup(auth, provider);
            let authInfo;
            if (results && results.user) {
                const { user: { uid, displayName, photoURL } } = results;
                authInfo = {
                    userId: uid,
                    name: displayName,
                    profilePhoto: photoURL,
                    isAuthenticated: true
                }
                localStorage.setItem('auth', JSON.stringify(authInfo));
                navigate('/');
            } else {
                throw new Error('Failed to sign in with google')
            }
        } catch (error) {
            //TODO: handle the error
            console.error(error);
        }
    }, [navigate])

    return userInfo?.isAuthenticated ? <Navigate to='/' /> : (
        <div className="login-page">
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign In With Google
            </button>
        </div>
    )
})