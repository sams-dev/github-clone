import {Button} from '../styledComponent'

const Form = () => {
  return (
    <div className="display-flex justify-end">
      <div className="bg-white form-box">
        <label>Nome</label>
        <input type="text" className="form-control" placeholder="Nome"></input>
        <label>Email</label>
        <input type="text" className="form-control" placeholder="Nome"></input>
        <label>Telefone</label>
        <input type="text" className="form-control" placeholder="Nome"></input>
        <Button size="lg" type="green" color="white" block>Comece agora mesmo.</Button>
        <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's of the printing and typesetting industry. </small>
      </div>
    </div>
  );
};

export default Form;

