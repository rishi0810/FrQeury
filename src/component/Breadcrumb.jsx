import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";

export default function CustomSeparator({ name }) {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate("/");
  }

  const breadcrumbs = [
    <Link className="hover:underline hover:underline-offset-2 text-zinc-500" key="1" onClick={handleClick}>
      Home
    </Link>,
    <Typography key="2" className="text-zinc-950">
      {name}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<ChevronRight className="size-3" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
