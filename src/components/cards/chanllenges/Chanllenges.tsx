import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import { ICell } from "../../../mockup/models";

const data: ICell[] = [
  {
    x: 0,
    y: 0,
    color: "pink",
    question: {
      content: `Cuộc phiêu lưu trên mạng xã hội của bạn là một trò chơi điện tử, những hành vi quấy rối, biến thái gạ gẫm dụ dỗ lừa tình bạn chính là các thử thách bạn phải vượt qua, kiến thức là Skills, kỹ năng là Items, bạn sẽ cần “level up” bản thân như thế nào để chiến thắng trò chơi.`,
    },
    image: "/src/assets/TH1.png",
  },
];

// Tạo styled component cho thẻ
const CardContainer = styled("div")({
  width: "75%",
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
  marginTop: "20px",
  flexDirection: "column",
  backgroundColor: "#F6F2E4",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 8px 16px rgba(0.4, 0, 0, 0.4)",
  textAlign: "center",
  justifyContent: "space-between",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0 8px 16px rgba(0.7, 0, 0, 1)",
  },
  "&:visited": {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
});

const CustomButton = styled(Button)({
  backgroundColor: "#ADD8E6", // Màu nền của nút
  color: "black", // Màu chữ
  fontSize: "20px", // Kích thước chữ
  padding: "10px 30px", // Khoảng cách nội dung bên trong nút
  borderRadius: "30px", // Bo tròn các góc
  border: "2px solid black", // Viền đen
  textTransform: "none", // Không viết hoa toàn bộ chữ
  justifySelf: "end",
  boxShadow: "2px 2px 0px 0px black, 4px 4px 0px 0px white", // Tạo hiệu ứng đổ bóng
  "&:hover": {
    backgroundColor: "#ADD8E6", // Màu nền khi di chuột vào nút
    boxShadow: "2px 2px 0px 0px black, 4px 4px 0px 0px white", // Giữ nguyên hiệu ứng đổ bóng khi di chuột vào nút
  },
});

const CustomDialogContent = styled(DialogContent)({
  backgroundImage:
    "linear-gradient(90deg, #03A9F4 25%, transparent 25%, transparent 50%, #03A9F4 50%, #03A9F4 75%, transparent 75%, transparent)",
  backgroundSize: "160px 160px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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

const Chanllenges = () => {
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
        Mở Thẻ Thử thách
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
              color: "#03A9F4",
            }}
          >
            Thẻ Thử Thách
          </Typography>
        </DialogTitle>
        <CustomDialogContent>
          <CardContainer>
            <Box component="div">
              <br />
              <Typography
                variant="h3"
                style={{ fontFamily: "Patrick Hand, cursive" }}
                dangerouslySetInnerHTML={{ __html: data[0].question?.content }}
                maxHeight="400px"
              />

              <br />
              <Box
                component="img"
                sx={{
                  height: "300px",
                  width: "300px",
                  maxHeight: { xs: "200px", sm: "300px", md: "400px" },
                  maxWidth: { xs: "200px", sm: "300px", md: "400px" },
                }}
                src={data[0].image}
              ></Box>
            </Box>
            <Box gap={2} component="div" width="100%" sx={{ display: "flex" }}>
              <TextField
                id="outlined-basic"
                label="Câu trả lời của bạn"
                variant="outlined"
                multiline
                minRows={2}
                sx={{
                  width: "90%",
                  "& .MuiInputLabel-root": {
                    fontFamily: "Patrick Hand, cursive",
                    fontSize: "21px",                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Patrick Hand, cursive",
                    fontSize: "21px",
                  },
                }}
              />
              <CustomButton>Send</CustomButton>
            </Box>
            {/* <RhinoImage src="/src/assets/mascot.png" alt="Rhino" /> */}
            {/* Thêm các phần khác nếu cần */}
          </CardContainer>
        </CustomDialogContent>
      </Dialog>
    </div>
  );
};

export default Chanllenges;
