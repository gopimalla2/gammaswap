import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from './index.module.scss';
import { ChevronLeft } from '@material-ui/icons';
import RoundTickFilled from '../../assets/icons/RoundTickFilled';

type ListItem = {
  id: string;
  label: string;
}

interface Props {
  title: string;
  list: Array<ListItem>;
  callBack: (item: ListItem) => void;
}

export default function BasicPopover({ title, list, callBack }: Props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  //   @ts-ignore
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item: ListItem) => {
    callBack(item);
    handleClose();
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={styles.container}>
      <Button aria-describedby={id} variant="contained" onClick={handleClick} endIcon={<ChevronLeft className={open ? styles.open : styles.close}/>}>
        {title}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            mt: '10px',
            '&::before': {
              backgroundColor: 'white',
              content: '""',
              display: 'block',
              position: 'absolute',
              width: 12,
              height: 12,
              top: -6,
              transform: 'rotate(45deg)',
              left: 'calc(70% - 6px)',
              borderLeft: '1px solid #E8E8E8',
              borderTop: '1px solid #E8E8E8',
            },
          }}
        />
        <Typography sx={{ p: 2, backgroundColor: 'white', minWidth: '190px', border: '1px solid #E8E8E8', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.06)', borderRadius: '12px' }}>
          {
            list.map(item => (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '8px', fontWeight: '700', fontSize: '14px'}} onClick={() => handleItemClick(item)}>
                {item.label}
                {
                  item.id === title && <RoundTickFilled/>
                }
              </div>
            ))
          }
        </Typography>
      </Popover>
    </div>
  );
}
