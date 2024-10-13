import { useEffect, useState } from "react";
import { CurrentTime } from "../functions/CurrentTime";

const Clock = () => {
  const [time, setTime] = useState(CurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(CurrentTime());
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval);
  }, []);

  // Dados a serem exibidos no relógio
  const timeEntries = [
    { label: "horas", value: time.horas },
    { label: "minutos", value: time.minutos },
    { label: "segundos", value: time.segundos },
    { label: "período", value: time.periodo },
    { label: "dia", value: time.dia },
    { label: "mes", value: time.mes },
    { label: "ano", value: time.ano },
  ];

  return (
    <div className="text-left text-3xl  lg:text-5xl my-5">
      <span className="text-gray-200 flex gap-2">
        <p className="text-orange-500">let</p> clock = {"{"}
      </span>
      <div className="pl-12 flex flex-col space-y-1 py-2">
        {timeEntries.map((entry, index) => (
          <p key={index} className="text-gray-200">
            {entry.label}:{" "}
            <strong className="text-violet-800">{entry.value}</strong>,
          </p>
        ))}
      </div>
      <p>{"};"}</p>
    </div>
  );
};

export default Clock;
