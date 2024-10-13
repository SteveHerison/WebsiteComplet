import { Player } from "@lottiefiles/react-lottie-player";
import Checked from "../../assets/checked.json";
import React, { useEffect, useState } from "react";

const AlerSucess = () => {
  const fullMessage = "Login realizado com sucesso!";
  const [displayedMessage, setDisplayedMessage] = useState("");
  const typingSpeed = 30; // Tempo em milissegundos entre cada letra

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullMessage.length) {
        setDisplayedMessage((prev) => prev + fullMessage[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [fullMessage]);

  return (
    <div className="flex flex-col justify-center items-center h-full gap-5">
      <Player
        autoplay
        loop
        src={Checked}
        style={{ height: "200px", width: "200px" }}
      />
      <h2 className="text-3xl text-green-500">{displayedMessage}</h2>
    </div>
  );
};

export default AlerSucess;
