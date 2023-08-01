import ButtomMobile from "../ButtomMobile";
import Form from "../Form";

const Hero = () => {
  return (
    <section id="hero" className="container-fluid bg-dark-50 pd-y">
      <div className="container">
        <div className="row align-items-center">
          <div>
            <h1 className="color-white">Feito para desenvolvedores.</h1>
            <p className="color-grey-50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <ButtomMobile/>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default Hero;