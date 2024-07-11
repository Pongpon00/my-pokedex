import { Outlet } from "react-router-dom";
import page_bg from "../assets/body_bg.png";

function PageBackground() {
  return (
    <div className="flex min-h-screen">
      <div
        className="flex justify-start xl:w-1/12 bg-repeat-y bg-center -z-10 w-0"
        style={{ backgroundImage: `url(${page_bg})` }}
      ></div>
      <div className="flex w-full justify-center shadow-2xl">
        <Outlet />
      </div>
      <div
        className="flex justify-end xl:w-1/12 bg-repeat-y bg-center -z-10 w-0"
        style={{ backgroundImage: `url(${page_bg})` }}
      ></div>
    </div>
  );
}

export default PageBackground;
