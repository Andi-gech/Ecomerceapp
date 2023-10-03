import { FaFacebook, FaGithub, FaInstagram, FaQq } from "react-icons/fa";

function Footer() {
  return (
    <div className=" h-[250px] flex  border-t-2 bg-slate-100 border-zinc-200 pb-10 mt-[100px]">
      <div className=" h-full w-2/5 flex  flex-col items-center justify-center ">
        <p className=" font-extrabold text-3xl text-blue-500">Senay Tech </p>
        <p className=" font-bold text-xl">contact us </p>
        <div className=" flex flex-row mt-2">
          <FaFacebook size={20} className=" mr-2" />
          <p>0910987126</p>
        </div>
        <div className=" flex flex-row mt-2">
          <FaFacebook size={20} className=" mr-2" />
          <p>0910987126</p>
        </div>
        <div className=" flex flex-row mt-2">
          <FaFacebook size={20} className=" mr-2" />
          <p>0910987126</p>
        </div>
      </div>
      <div className=" h-full w-3/5 flex  items-center justify-center flex-row ">
        <div className="flex flex-col flex-1 w-[200px] justify-center">
          <p className=" font-extrabold text-xl underline  ">Senay Tech</p>
          <li>About us</li>
          <li>Terms And Condition</li>
          <li>Faq</li>
        </div>
        <div className="flex flex-col flex-1 w-[200px] justify-center">
          <p className=" font-extrabold text-xl underline ">
            customer Services
          </p>
          <li>About us</li>
          <li>Terms And Condition</li>
          <li>Faq</li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
