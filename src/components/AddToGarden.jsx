import { useRouter } from "next/router";
import { useAuth, SignUpButton } from "@clerk/nextjs";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";


const AddToGarden = () => {
    const router = useRouter();
  const { userId } = useAuth();

  return userId ? (
    <Button
      className="addBtn"
      size="small"
      sx={{
        padding: "0.5rem 1rem",
        fontFamily: "Montserrat, sans-serif",
        color: "primary",
      }}
    >
      Add to My Garden
    </Button>
  ) : (
    <SignUpButton mode="modal">
      <Button
        className="addBtn"
        size="small"
        sx={{
          padding: "0.5rem 1rem",
          fontFamily: "Montserrat, sans-serif",
          color: "primary",
        }}
      >
        Add to My Garden
      </Button>
    </SignUpButton>
  );
};

export default AddToGarden;