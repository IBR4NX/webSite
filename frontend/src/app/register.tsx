// Register.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import   { post }  from "../features/api/api.js";

export default function Register() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [messange, setMessange] = useState("");

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      name: { value: string };
      number: { value: string };
      username: { value: string };
    };

    const data = ({
      email: target.email.value,
      password: target.password.value,
      name: target.name.value,
      number: target.number.value,
      username: target.username.value,
    });

      post("/auth/register",data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data.resp));
        // console.log(res);
         nav("/login");
        // setMessange(res.data.error)
      })
      .catch((err) => {
        setMessange(err.response?.data?.error || "حدث خطأ غير متوقع");
      });
  }

  return (
    <>
    <form className=" max-w-2xs flex flex-col gap-2 bg-white/10 m-auto" onSubmit={handleRegister}>
      <input type="text" name="name" placeholder="الاسم" required />
      <input type="email" name="email" placeholder="الايميل" required />
      <input type="password" name="password" placeholder="كلمة المرور" required />
      <input type="text" name="number" placeholder="رقم الهاتف" required />
      <input type="text" name="username" placeholder="username" required />
      <button type="submit">تسجيل</button>
    </form>
      {messange && <p>{messange}</p>}
    </>
  );
}