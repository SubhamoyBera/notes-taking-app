import AutorenewIcon from '@mui/icons-material/Autorenew'
import { useStyles } from '../styles/PendingNotesStyle'

export default function PendingNotes() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AutorenewIcon className={classes.icon} />
    </div>
  )
}