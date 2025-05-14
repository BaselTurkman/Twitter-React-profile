// Sidebar.styled.js
import { styled } from '@mui/material/styles';
import { ListItemIcon } from '@mui/material';

export const StyledListItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '6px',
  color: 'white',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  listStyle: 'none',
  '&:hover': {
    backgroundColor: '#2b2929',
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)({
  color: 'white',
  minWidth: '40px',
});

