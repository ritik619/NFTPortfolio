import { Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {};

const MenuBar = (props: Props) => {
  return (
    <Stack>
      <Card
        sx={{
          backgroundColor: "#f0efe0",
          height: "25px",
          border: "2px solid #fffbef",
          borderRadius: "0px",
        }}
      >
        <Stack ml={2} spacing={2} direction="row">
          <Image
            alt="/XP/24x24/actions/back.png"
            src="/XP/24x24/actions/back.png"
            height="24px"
            width="24px"
          />
          <Typography>Back</Typography>
          <Image
            src="/XP/24x24/actions/forward.png"
            alt="/XP/24x24/actions/forward.png"
            height="24px"
            width="24px"
          />
          <Image
            alt="/XP/24x24/places/stock_folder.png"
            src="/XP/24x24/actions/fileopen.png"
            height="24px"
            width="24px"
          />
          <Image
            alt="/XP/128x128/apps/search.png"
            src="/XP/128x128/apps/search.png"
            height="24px"
            width="24px"
          />
          <Typography>Search</Typography>
          <Image
            alt="/XP/24x24/places/stock_folder.png"
            src="/XP/24x24/places/stock_folder.png"
            height="24px"
            width="24px"
          />
          <Typography>Folders</Typography>
          <Image
            alt="/XP/24x24/actions/back.png"
            src="/XP/24x24/categories/stock_internet.png"
            height="24px"
            width="24px"
          />
        </Stack>
      </Card>
      <Card
        sx={{
          backgroundColor: "#f0efe0",
          height: "25px",
          border: "2px solid #fffbef",
          borderRadius: "0px",
        }}
      >
        <Stack ml={2} spacing={2} direction="row">
          <Typography>File</Typography>
          <Typography>Edit</Typography>
          <Typography>View</Typography>
          <Typography>Favourites</Typography>
          <Typography>Tools</Typography>
          <Typography>Help</Typography>
        </Stack>
      </Card>
    </Stack>
  );
};

export default MenuBar;
