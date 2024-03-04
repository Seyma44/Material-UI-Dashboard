import React from 'react';
import { InputBase } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import * as Icons from '../../icons';

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  backgroundColor: 'transparent',
  borderRadius: '5px',
  padding: '10px',
  flexGrow: 1,
  justifyContent: 'center',
  paddingRight: theme.spacing(4), // Default padding for small screens
  paddingLeft: theme.spacing(5), // Default padding for small screens

  [theme.breakpoints.down('lg')]: {
    paddingRight: theme.spacing(1), // Adjust padding for large screens
    paddingLeft: theme.spacing(2), // Adjust padding for large screens
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '6.6px 15px',
  borderRadius: '0 5px 5px 0',
  backgroundColor: theme.palette.primary.main, // Use primary color from the theme
  '& svg': {
    color: theme.palette.common.white, // Use common white color from the theme
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.white,
  '& .MuiInputBase-input': {
    padding: '7px 20px',
    borderRadius: '5px 0 0 5px',
    backgroundColor: theme.palette.secondary.main, // Use secondary color from the theme
    '&::placeholder': {
      opacity: 0.6,
    },
  },
}));

interface SearchBarProps {
  isMobile: boolean;
  showSearchBar?: boolean;
  searchPlaceholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ isMobile, showSearchBar = true, searchPlaceholder = 'Search...' }) => {
  const theme = useTheme(); // Access the theme object

  return (
    <>
      {!isMobile && showSearchBar && (
        <SearchContainer>
          <StyledInputBase
            placeholder={searchPlaceholder}
            sx={{
              width: '100%',
            }}
          />
          <SearchIconWrapper>
            <Icons.SearchIcon />
          </SearchIconWrapper>
        </SearchContainer>
      )}
    </>
  );
};

export default SearchBar;
