import {Dialog, DialogActions, Button, DialogTitle, DialogContent, DialogContentText} from "@mui/material";


export const Modal = ({ open, handleClose, handleConfirm, msgModal }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
                    {msgModal.titulo}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{msgModal.msg}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Si
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}