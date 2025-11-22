"use client";

import { FC } from "react";

interface RoastProps {
  name: string;
}

const Roast: FC<RoastProps> = ({ name }) => {
  const roast = `Hey ${name}, you’re like a broken pencil—pointless but still trying to write something.`;
  return <p className="text-lg">{roast}</p>;
};

export default Roast;
