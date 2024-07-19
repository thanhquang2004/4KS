import { Box } from "@mui/material";
import { ICell } from "../../mockup/models";
import StartEndCell from "./StartEndCell";
import Cell from "./Cell";

const Board = () => {
  const data: ICell[] = [
    { x: 0, y: 0, color: "red", isStart: true },
    { x: 0, y: 1, color: "red" },
    { x: 0, y: 2, color: "red" },
    { x: 0, y: 3, color: "red" },
    { x: 0, y: 4, color: "red", isEnd: true },

    { x: 1, y: 2, color: "green" },
    { x: 1, y: 4, color: "green" },

    { x: 2, y: 2, color: "green" },
    { x: 2, y: 3, color: "green" },
    { x: 2, y: 4, color: "green" },
  ];

  return (
    <>
      <Box
        gap={1}
        display="flex"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 50px)",
          gridTemplateRows: "repeat(5, 50px)",
          gap: "0px",
        }}
      >
        {data.map((cell: ICell) => {
          {
            if (cell.isStart) return <StartEndCell label="Bắt đầu" />;
          }
          return <Cell color={cell.color} x={cell.x} y={cell.y} />;
        })}
      </Box>
    </>
  );
};

export default Board;
