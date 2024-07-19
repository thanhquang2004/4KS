// ImageCell.js
import { Box } from "@mui/material";

interface IProps {
  src: string;
}

const ImageCell = ({ src }: IProps) => {
  return (
    <Box
      sx={{
        width: 50,
        height: 50,
        position: "relative",
        border: "1px solid black",
      }}
    >
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default ImageCell;
