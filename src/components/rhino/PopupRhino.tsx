import { useState } from "react";
import { Container, TextField, Button, Box } from "@mui/material";
import Rhino from "./Rhino";

function PopupRhino() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    setOutput(input);
  };

  return (
    <Container maxWidth="sm" sx={{ position: "relative" }}>
      <h1>Rhino Chat Box</h1>
      <TextField
        label="Input"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      {output && (
        <Box sx={{ position: "absolute", top: 0, left: 0 }}>
          <Rhino text={output} />
        </Box>
      )}
    </Container>
  );
}

export default PopupRhino;
