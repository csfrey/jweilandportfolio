import { IoIosMenu } from "react-icons/io";

const SiteHeader = () => {
  return (
    <header className="shadow p-2 flex justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="font text-3xl drop-shadow-md">Jhonathon Weiland</h1>
      </div>
      <div className="flex flex-col justify-center">
        <IoIosMenu className="text-4xl" />
      </div>
    </header>
  );
};

export default SiteHeader;
