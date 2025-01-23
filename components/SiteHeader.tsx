import { IoIosMenu } from "react-icons/io";

const SiteHeader = () => {
  return (
    <div className="p-2 flex justify-between bg-gray-50">
      <div className="flex flex-col justify-center">
        <h1 className="font text-3xl drop-shadow-md">Jhonathon Weiland</h1>
      </div>
      <div className="flex flex-col justify-center">
        <IoIosMenu className="text-4xl" />
      </div>
    </div>
  );
};

export default SiteHeader;
