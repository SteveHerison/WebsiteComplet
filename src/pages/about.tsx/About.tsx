import Button from "../../components/Button";

const About = () => {
  return (
    <div className="h-full w-full flex flex-col p-2">
      <div>
        <Button label="Voltar" />
      </div>
      <div className="h-full flex justify-center items-center">
        Página About
      </div>
    </div>
  );
};

export default About;
