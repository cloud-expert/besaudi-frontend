import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, login } from "../services/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googleUser, setGoogleUser] = useState(null);
  const modifyMessage = (str) => {
    let tmp = str.replaceAll('"', "");
    return `${tmp.charAt(0).toUpperCase()}${tmp.slice(1)}`;
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

  const handleRegister = async (e) => {
    register(name, email, password).then(
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
            src="/img/signup_logo.png"
            alt="signup"
            className="my-auto ml-auto"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="w-1/2 text-white">
          <form className="w-1/2 mx-auto">
            <div className="text-center">
              <h1 className="py-4 my-10 text-5xl font-bold gradient-text">
                Sign up for free
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
              &nbsp;&nbsp;Sign up with Google
            </button>

            <hr></hr>
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  viewBox="0 0 940 1000"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M736 722c136 48 204 88.667 204 122v106H470 0V844c0-33.333 68-74 204-122 62.667-22.667 105.333-45.667 128-69s34-55 34-95c0-14.667-7.333-31-22-49s-25.333-42.333-32-73c-1.333-8-4.333-14-9-18s-9.333-6.667-14-8c-4.667-1.333-9.333-7-14-17s-7.667-24.333-9-43c0-10.667 1.667-19.333 5-26 3.333-6.667 6.333-10.667 9-12l4-4c-5.333-33.333-9.333-62.667-12-88-2.667-36 11-73.333 41-112s82.333-58 157-58 127.333 19.333 158 58 44 76 40 112l-12 88c12 5.333 18 19.333 18 42-1.333 18.667-4.333 33-9 43s-9.333 15.667-14 17c-4.667 1.333-9.333 4-14 8s-7.667 10-9 18c-5.333 32-15.667 56.667-31 74s-23 33.333-23 48c0 40 11.667 71.667 35 95s65.667 46.333 127 69" />
                </svg>
              </div>
            </div>
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
              onClick={handleRegister}
            >
              Sign Up
            </button>
            <p>
              Already have an account?&nbsp;&nbsp;&nbsp;
              <a href="/#/signin" className="text-purple-400">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
