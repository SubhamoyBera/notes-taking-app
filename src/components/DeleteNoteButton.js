import { useState } from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStyles } from '../styles/NoteStyle'

export default function DeleteNoteButton({ title, onDelete }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClickClose = () => setOpen(false)
  const handleDelete = () => {
    handleClickClose()
    onDelete()
  }

  return (
    <>
      <ClickAwayListener onClickAway={handleClickClose}>
        <div>
          <IconButton
            aria-label="delete"
            className={classes.iconBtn}
            style={{ right: '.2em' }}
            onClick={handleClickOpen}
            type="button"
          >
            <DeleteIcon />
          </IconButton>

          <Dialog
            open={open}
            onClose={handleClickClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.deleteDialog}
          >
            <DialogTitle id="alert-dialog-title" disableTypography>
              Delete note?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {title}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDelete} color="primary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </ClickAwayListener>
    </>
  )
}