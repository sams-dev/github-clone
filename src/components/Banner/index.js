import { Title, Description, Button } from "../styledComponent";


const Banner = () => {
  return (
    <section id="banner" className="container-fluid bg-green pd-y">
      <div className="container">
        <div className="row">
          <div></div>
          <div>
            <Title>Seus projetos em um só lugar.</Title>
            <Description color="white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</Description>
            <br></br>
            <Button size="lg" type="dark" color="white" block>Comece agora mesmo.</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;