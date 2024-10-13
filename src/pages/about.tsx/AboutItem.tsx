import { useParams } from "react-router-dom";

const AboutItem = () => {
  const params = useParams();
  return (
    <div className="h-full flex justify-center items-center">
      Página sobre {params.slug}
    </div>
  );
};

export default AboutItem;
