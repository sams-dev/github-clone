import { Image } from "../styledComponent";

const Footer = () => {
  return (
    <footer id="footer" className="container-fluid  bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <h1 className="color-white text-align-center">©developed by SAMSDEV</h1>
            <Image id="sd-img" src={require("../../assets/SDs.png")} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;