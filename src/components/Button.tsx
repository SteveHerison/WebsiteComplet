import { useNavigate } from "react-router-dom";

type Props = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: Props) => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="bg-green-500 p-2 text-black font-semibold rounded-xl"
      onClick={handleBackButton}
    >
      {label}
    </button>
  );
};

export default Button;
