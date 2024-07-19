import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ICell } from "../../../mockup/models";

const data: ICell[] = [
  {
    x: 0,
    y: 0,
    color: "pink",
    title: "CATCALL",
    question: {
      content:
        "Ông hàng xóm một ngày đẹp trời khen bạn: “Mông đẹp thế, nhìn căng phết!”. Bạn sẽ:",
      answer: [
        'Biết đây là hành vi quấy rối, tức quá trời tức nhưng miệng vẫn nở một nụ cười thật “tươi"',
        "Bày tỏ thái độ không đồng tình, lắc đầu nguầy nguậy",
        "Khen lại: “Mông chú cũng đẹp thế, nhìn không kém gì cháu!”",
        "Méc ba, méc mẹ, méc vợ và con ông hàng xóm",
      ],
    },
  },
];

// Tạo styled component cho thẻ
const CardContainer = styled("div")({
  width: "75%",
  height: "92%",
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
  marginTop: "10px",
  flexDirection: "column",
  backgroundColor: "#F6F2E4",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 8px 16px rgba(0.4, 0, 0, 0.4)",
  textAlign: "center",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0 8px 16px rgba(0.7, 0, 0, 1)",
  },
  "&:visited": {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
});

const CustomDialogContent = styled(DialogContent)({
  backgroundImage:
    "linear-gradient(90deg, #FFB6C1 25%, transparent 25%, transparent 50%, #FFB6C1 50%, #FFB6C1 75%, transparent 75%, transparent)",
  backgroundSize: "160px 160px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const WavyBorderBox = styled(Box)({
  backgroundColor: "#ff77a9",
  color: "white",
  padding: "20px",
  width: "fit-content",
  borderRadius: "5px",
  fontFamily: "Arial, sans-serif",
  // position: "relative",
});

// const WavyBorderBox = styled(StyledBox)`
//   &::before {
//     border: none;
//     border-radius: 0;
//     border-image: initial;
//     clip-path: polygon(
//       10% 0%,
//       90% 0%,
//       100% 10%,
//       100% 90%,
//       90% 100%,
//       10% 100%,
//       0% 90%,
//       0% 10%
//     );
//     background: white;
//   }
// `;

const PopupCard = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Mở Thẻ Tình Huống
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          style: { height: "100%", borderRadius: "20px" },
        }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontFamily: "Bungee, sans-serif",
              color: "#ff77a9",
            }}
          >
            Thẻ Tình Huống
          </Typography>
        </DialogTitle>
        <CustomDialogContent>
          <CardContainer>
            <Typography
              variant="h3"
              sx={{ fontFamily: "Luckiest Guy, cursive", color: "#ff77a9" }}
            >
              "{data[0].title}"
            </Typography>
            <WavyBorderBox sx={{ width: "90%" }}>
              <Typography
                variant="h3"
                style={{ fontFamily: "Patrick Hand, cursive" }}
              >
                {data[0].question?.content}
              </Typography>
            </WavyBorderBox>
            <br />
            {data[0].question?.answer?.map((answer, index) => (
              <Button
                sx={{
                  backgroundColor: "#FFC6C1",
                  widows: "100%",
                  "&:hover": {
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#F6D561",
                  },

                  marginBottom: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "10px",
                    width: "750px",
                    borderRadius: "5px",
                    height: "90px",
                    maxHeight: "90px",
                  }}
                >
                  <Typography
                    sx={{
                      position: "relative",
                      marginRight: "10px",
                      fontSize: "40px",
                      fontFamily: "Luckiest Guy, cursive",
                      color: "#FB7DA8",
                    }}
                  >
                    #{index + 1}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      textAlign: "left",
                      fontFamily: "Patrick Hand, cursive",
                      width: "100%",
                    }}
                  >
                    {answer}
                  </Typography>
                </Box>
              </Button>
            ))}
            {/* <RhinoImage src="/src/assets/mascot.png" alt="Rhino" /> */}
            {/* Thêm các phần khác nếu cần */}
          </CardContainer>
        </CustomDialogContent>
      </Dialog>
    </div>
  );
};

export default PopupCard;
