// src/utils/helpers.ts
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const getFirstTwoNames = (fullName: string) => {
  const names = fullName.split(" "); // Divide o nome em partes
  const firstTwoNames = names.slice(0, 2); // Pega os dois primeiros
  return firstTwoNames.map(capitalizeFirstLetter).join(" "); // Capitaliza e junta
};
