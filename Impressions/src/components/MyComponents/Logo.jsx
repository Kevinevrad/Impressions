import logo from "../../assets/img/logo.png";
const Logo = ({ logoHeight }) => {
  return (
    <div className="logo text-center mb-4">
      <img
        src={logo}
        alt="Logo"
        height={logoHeight || "60"}
        className="border px-4 py-2 rounded bg-white border-2 border-success"
      />
    </div>
  );
};

export default Logo;
