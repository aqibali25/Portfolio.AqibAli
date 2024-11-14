import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <RotateLoader color="#f5024d" size={15} />
    </div>
  );
};

export default Loader;
