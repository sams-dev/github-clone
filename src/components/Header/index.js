import MenuMobile from "../MenuMobile";
import { Image } from "../styledComponent";

const Header = () => {
  return (
    <header className="container-fluid bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <div>
            <Image src={require("../../assets/logo.png")}/>
          </div>
          <div>
          <MenuMobile/>
            <ul id="main-menu" className="display-flex justify-end">
              <li><a href="#">Features</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    );
};

export default Header;