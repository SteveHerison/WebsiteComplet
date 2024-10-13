declare module "@lottiefiles/react-lottie-player" {
  interface PlayerProps {
    autoplay: boolean;
    loop: boolean;
    src: string | { v: string; fr: number }; // ou definir um tipo específico para o objeto de animação
    style?: React.CSSProperties;
  }

  const Player: React.FC<PlayerProps>;
  export { Player };
}
