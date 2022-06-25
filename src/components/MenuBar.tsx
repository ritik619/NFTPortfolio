import { Card, Divider, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Icon } from "@iconify/react";
type Props = {};

const MenuBar = (props: Props) => {
  return (
    <Stack>
      <Card
        sx={{
          backgroundColor: "#f0efe0",
          height: "24px",
          border: "2px solid #fffbef",
          borderRadius: "0px",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack ml={2} spacing={2} direction="row">
            <Typography>File</Typography>
            <Typography>Edit</Typography>
            <Typography>View</Typography>
            <Typography>Favourites</Typography>
            <Typography>Tools</Typography>
            <Typography>Help</Typography>
          </Stack>
          <Image
            src="/windows-logo.jpg"
            alt="/windows-logo.jpg"
            width="24px"
            height="24px"
          />
        </Stack>
      </Card>
      <Card
        sx={{
          backgroundColor: "#f0efe0",
          height: "38px",
          border: "2px solid #fffbef",
          borderRadius: "0px",
        }}
      >
        <Stack m={1} spacing={2} direction="row">
          <Image
            alt="/XP/24x24/actions/back.png"
            src="/XP/24x24/actions/back.png"
            height="24px"
            width="24px"
          />
          <Typography>Back</Typography>
          <ArrowDropDownIcon sx={{ marginLeft: "0!important" }} />
          <Image
            src="/XP/24x24/actions/forward.png"
            alt="/XP/24x24/actions/forward.png"
            height="24px"
            width="24px"
          />
          <ArrowDropDownIcon sx={{ marginLeft: "0!important" }} />
          <Image
            alt="/XP/24x24/places/stock_folder.png"
            src="/XP/24x24/actions/fileopen.png"
            height="24px"
            width="24px"
          />
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              color: "#8a8b82",
              mr: "10px !important",
            }}
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
          <Divider
            orientation="vertical"
            flexItem
            color="#8a8b82"
            sx={{
              color: "#8a8b82",
              mr: "10px !important",
            }}
          />
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
          height: "26px",
          border: "2px solid #fffbef",
          borderRadius: "0px",
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography color="GrayText">Address</Typography>
          <Stack
            sx={{
              width: "90%",
              backgroundColor: "white",
              border: "2px solid #fffbef",
              m: 0,
            }}
          >
            <Typography>
              C:\Documents and Settings\111\Local Settings\Temp
            </Typography>
          </Stack>
          <Icon
            icon="ri:arrow-drop-down-line"
            style={{
              height: "24px",
              width: "24px",
              margin: 0,
              backgroundColor: "lightblue",
              color: "darkblue",
            }}
          />
          <Stack
            sx={{ ml: "0 !important" }}
            direction="row"
            justifyContent="space-between"
          >
            <Image
              src="/XP/24x24/actions/go-next-symbolic.png"
              alt="/XP/24x24/actions/go-next-symbolic.png"
              width="24px"
              height="24px"
            />
            <Typography>Go</Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default MenuBar;
