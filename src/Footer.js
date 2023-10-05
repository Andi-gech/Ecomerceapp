import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaQq,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" h-[250px] flex dark:bg-zinc-800 dark:border-zinc-800  border-t-2 bg-slate-100 border-zinc-200 pb-10 mt-[100px]">
      <div className=" h-full w-2/5 flex  flex-col items-center justify-center ">
        <p className=" font-extrabold  text-3xl text-blue-500">Senay Tech </p>
        <p className=" font-bold text-xl text-black dark:text-white">
          contact us{" "}
        </p>
        <div className=" flex flex-row mt-2">
          <FaInstagram size={20} className=" mr-2" />
          <p className=" text-black dark:text-white">@SenayTech</p>
        </div>
        <div className=" flex flex-row mt-2">
          <FaFacebook size={20} className=" mr-2" />
          <p className=" text-black dark:text-white">@SenayTech</p>
        </div>
        <div className=" flex flex-row mt-2">
          <FaPhone size={20} className=" mr-2" />
          <p className=" text-black dark:text-white">09*******</p>
        </div>
      </div>
      <div className=" h-full w-3/5 flex  items-center justify-center flex-row ">
        <div className="flex flex-col flex-1 w-[200px] justify-center">
          <p className=" font-extrabold text-xl underline text-black dark:text-white  ">
            Senay Tech
          </p>
          <li className=" text-black dark:text-white">About us</li>
          <li className=" text-black dark:text-white">Terms And Condition</li>
          <li className=" text-black dark:text-white">Faq</li>
        </div>
        <div className="flex flex-col flex-1 w-[200px] justify-center">
          <p className=" font-extrabold text-xl underline text-black dark:text-white">
            customer Services
          </p>
          <li className=" text-black dark:text-white">About us</li>
          <li className=" text-black dark:text-white">Terms And Condition</li>
          <li className=" text-black dark:text-white">Faq</li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
