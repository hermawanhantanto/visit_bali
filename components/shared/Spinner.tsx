import { RotateCw } from "lucide-react";

interface Props {
  color?: string;
  size?: number;
}

const Spinner = ({ color, size }: Props) => {
  return (
    <RotateCw
      size={size || 20}
      className={`animate-spin text-${color || "white"}`}
    />
  );
};

export default Spinner;
