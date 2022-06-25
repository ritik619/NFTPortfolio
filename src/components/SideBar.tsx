import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Grid,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

type TypographyWithIconProps = {
  src: string;
  alt: string;
  text: string;
};
const TypographyWithIcon = ({ src, alt, text }: TypographyWithIconProps) => (
  <Stack direction="row">
    <Image src={src} alt={alt} height={24} width={24} />

    <Typography>{text}</Typography>
  </Stack>
);

const SideBar = () => {
  return (
    <Grid
      item
      lg={3}
      textAlign="center"
      sx={{
        backgroundColor: "#64A2D8",
        p: 3,
      }}
    >
      <Stack>
        <Accordion>
          <AccordionSummary sx={{ color: "#2a47bc" }}>
            File and Folder Tasks
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{ backgroundColor: "#d6dcf9" }}>
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Other Places</AccordionSummary>
          <AccordionDetails>
            <Card>
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
            </Card>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Details</AccordionSummary>
          <AccordionDetails>
            <Card>
              <TypographyWithIcon
                src="/XP/24x24/actions/folder_new.png"
                alt="/XP/24x24/actions/folder_new.png"
                text="Make a new folder"
              />
            </Card>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Grid>
  );
};

export default SideBar;
