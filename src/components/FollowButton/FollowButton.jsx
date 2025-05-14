import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const FollowButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  minWidth: '30px', 
  borderRadius: '30px',
  color: 'black',
  padding: '4px 12px',
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
}));
