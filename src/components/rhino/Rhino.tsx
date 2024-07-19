import { Box, Typography } from "@mui/material";

interface Iprops {
  text: string;
}

const Rhino = ({ text }: Iprops) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "transparent",
        padding: 2,
        position: "absolute",
        zIndex: 1,
        maxWidth: "300px",
        margin: "20px auto",
        right: 0,
      }}
    >
      <img
        src="/src/assets/mascot.png"
        alt="Rhino"
        style={{ width: "300px", height: "300px"}}
      />
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          padding: 2,
          borderRadius: 2,
          border: "2px solid #000",
          boxShadow: "5px 5px 0 #000",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-20px",
            border: "10px solid transparent",
            borderRightColor: "#f0f0f0",
            borderLeft: "0",
            borderTop: "0",
            marginTop: "-5px",
          },
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default Rhino;
