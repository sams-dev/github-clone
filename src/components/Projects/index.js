import Portifolio from "../Portifolio";
import { Title, Description } from "../styledComponent";


const Projects = () => {
  return (
    <section className="container-fluid pd-y">
      <div className="container">
        <div className="row">
          <div className="text-align-center">
            <Title>Seus projetos em um só lugar.</Title>
            <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</Description>
          </div>
        </div>
        <Portifolio/>
      </div>
    </section>
  );
};

export default Projects;