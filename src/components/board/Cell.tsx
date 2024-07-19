// Cell.js
import { Box } from "@mui/material";

interface IProps {
  color: string;
  x: number;
  y: number;
}

const Cell = ({ color, x, y }: IProps) => {
  return (
    <Box
      sx={{
        width: 50,
        height: 50,
        backgroundColor: color,
        border: "1px solid black",
        left: `${x * 50}px`,
        top: `${y * 50}px`,
        
      }}
    />
  );
};

export default Cell;
