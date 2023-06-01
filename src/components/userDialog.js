import { Logout } from "@mui/icons-material";
import { Avatar, Dialog, DialogTitle, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { List } from "tabler-icons-react";


const UserProfileDialog = ({handleClose, open, title}) => {
    return(
        <Dialog handleClose={handleClose} open={open}>
            <DialogTitle>{title}</DialogTitle>
            <List sx={{pt: 0}}>
                <ListItem disableGutters>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar alt="Logout">
                                <Logout />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    )
}

export default UserProfileDialog;