import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>

        <form action="./api/hello" method="post">

          <label htmlFor="name">Enter Name </label>
          <input type="text" name="name" id="name" />


          <label htmlFor="email"> Enter email </label>
          <input type="text" name="email" id="email" />

          <label htmlFor="password"> Enter password </label>
          <input type="text" name="password" id="password" />

          <input type="submit" value="submit" />

        </form>
      </div>
    </>
  );
}
