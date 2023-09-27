import { useRouter } from "next/router";
import { useAuth, SignUpButton } from "@clerk/nextjs";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const AddToGarden = ({ PlantId }) => {
  const router = useRouter();
  const { userId } = useAuth();
  const [addedToGarden, setAddedToGarden] = useState(false);


  const addToMyGarden = async () => {
    // Check if the user is logged in
    if (userId) {
      // Send a request to your server to add the plant to the user's garden
      try {
        const response = await fetch("/api/add-to-garden", {
          method: "POST",
          body: JSON.stringify({ userId, plantId }), // Send the user and plant ID to your server
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          // If the request was successful, update the UI to show "Added to My Garden"
          setAddedToGarden(true);
        } else {
          // Handle errors if needed
          console.error("Failed to add the plant to My Garden");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // If the user is not logged in, show the sign-up modal
      // (You can customize this part according to your UI)
      router.push("/sign-up"); // Redirect to the sign-up page
    }
  };

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
