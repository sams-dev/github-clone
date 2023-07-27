import Portifolio from "../Portifolio";

const Projects = () => {
  return (
    <section className="container-fluid pd-y">
      <div className="container">
        <div className="row">
          <div className="text-align-center">
            <h1 className="color-dark">Seus projetos em um só lugar.</h1>
            <p className="color-grey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</p>
          </div>
        </div>
        <Portifolio/>
      </div>
    </section>
  );
};

export default Projects;