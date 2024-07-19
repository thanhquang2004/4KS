// StartEndCell.js
import { Box, Typography } from "@mui/material";

interface IProps {
  label: string;
}

const StartEndCell = ({ label }: IProps) => {
  return (
    <Box
      sx={{
        width: 50,
        height: 50,
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        left: 0,
        top: 0,
      }}
    >
      <Typography variant="caption" sx={{ color: "white" }}>
        {label}
      </Typography>
    </Box>
  );
};

export default StartEndCell;
