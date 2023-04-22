import React from "react";
import "./CircleWithInfo.css"; // Archivo de estilos CSS

interface CircleWithInfoProps {
  info: string;
}

const CircleWithInfo: React.FC<CircleWithInfoProps> = ({ info }) => {
  return (
    <div className="circle">
      <div className="letter-i">I</div>
      <p className="info">{info}</p>
    </div>
  );
};

export default CircleWithInfo;