import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Logout, Settings } from "tabler-icons-react";

export default function UserMenu({ userInfo, onClickLogout }) {
  return (
    <Paper
      sx={{
        width: 200,
        maxWidth: "100%",
        float: "right",
        position: "absolute",
        top: "80px",
        right: "0px",
      }}
    >
      <MenuList>
        <MenuItem>
          <ListItemText>{`${userInfo.firstName} ${userInfo.lastName}`}</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={onClickLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
