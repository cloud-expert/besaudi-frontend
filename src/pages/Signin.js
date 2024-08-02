import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import axios from "axios";
import { register } from "../services/auth.service";
export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googleUser, setGoogleUser] = useState(null);
  const modifyMessage = (str) => {
    let tmp = str.replaceAll('"', "");
    return `${tmp.charAt(0).toUpperCase()}${tmp.slice(1)}`;
  };

  const handleLogin = async () => {
    login(email, password).then(
      (response) => {
        console.log(response);
        navigate("/");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        let errors = resMessage.split(", ");
        for (let i = 0; i < errors.length; i++) {
          let tmp = modifyMessage(errors[i]);
          toast.error(tmp);
        }
      }
    );
  };
  const handleGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => toast.error(error),
  });
  useEffect(() => {
    //console.log(user);
    if (googleUser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          //console.log(res.data);
          const email = res.data.email;
          const password = "google1234!@";
          const name = res.data.name;
          login(email, password).then(
            (response) => {
              console.log(response);
              navigate("/");
            },
            (error) => {
              register(name, email, password).then((response) => {
                console.log(response);
                navigate("/");
              });
            }
          );
        })
        .catch((err) => console.log(err));
    }
  }, [googleUser]);
  return (
    <div className="bg-[#16082E] h-dvh relative overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] top-[-91px] left-[-232px] 
      rounded-[50%] bg-gradient-to-br from-purple-600 opacity-30 blur-3xl"
      ></div>

      <div
        className="w-[600px] h-[600px] bottom-0 -right-80 absolute
      rounded-[50%] bg-gradient-to-br from-purple-900 opacity-30 blur-3xl"
      ></div>

      <div className="flex items-center">
        <div className="w-1/2 h-full ">
          <img
            src="/img/signin_logo.png"
            alt="signup"
            className="my-auto ml-auto"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="w-1/2 text-white">
          <form className="w-1/2 mx-auto">
            <div className="text-center">
              <h1 className="py-4 my-10 text-5xl font-bold gradient-text">
                Sign in now
              </h1>
            </div>
            <button className="form-input" onClick={handleGoogle}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                height="1.2em"
                width="1.2em"
                className="inline"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
              &nbsp;&nbsp;Sign in with Google
            </button>

            <hr></hr>

            <div className="relative">
              <input
                type="text"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 113.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 01-3.163 2zM2.5 9a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mx-auto button "
              onClick={handleLogin}
            >
              Sign In
            </button>

            <div className="relative">
              <button className="form-input">Forget Password</button>
            </div>
            <p>
              Don't have an account?&nbsp;&nbsp;&nbsp;
              <a href="/#/signup" className="text-purple-400">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
