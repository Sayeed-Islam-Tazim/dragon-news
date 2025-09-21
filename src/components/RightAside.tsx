import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightAside = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Login With</h3>
      <button className="w-full mb-2 flex justify-center items-center text-blue-300 border-1 border-solid p-2 rounded">
        <FaGoogle className="me-2" /> Login with Google
      </button>
      <button className="w-full mb-2 flex justify-center items-center border-1 border-solid p-2 rounded">
        <FaGithub className="me-2" /> Login with Github
      </button>

      <h3 className="text-lg font-semibold mb-2">Find Us On</h3>
      <div className="flex flex-col ">
        <button
          className="rounded-tl-md border-1 border-white flex justify-center items-center gap-2 rounded-r-none bg-slate-800 py-2 px-4  text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <FaFacebook />
          Facebook
        </button>
        <button
          className="rounded-none bg-slate-800 py-2 px-4 flex justify-center items-center gap-2 border-1 border-white text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <FaTwitter />
          Twitter
        </button>
        <button
          className="rounded-br-md rounded-l-none bg-slate-800 flex justify-center items-center gap-2 py-2 px-4 border-1 border-white text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <FaInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default RightAside;
