import React, { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setOpen, setDeleteModalOpen, setPage,setRowsPerPage } from '../reducers/actions';


interface CommonContextProps {
  handleButtonClick: () => void;
  handleCloseModal: () => void;
  handleCloseDeleteModal: () => void;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode; // Define children prop
}

  // Create context
  const CommonContext = createContext<CommonContextProps | null>(null);

  export const CommonProvider: React.FC<CommonContextProps> = ({ children }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setOpen(true));
  };

  const handleCloseModal = () => {
    dispatch(setOpen(false));
  };

  const handleCloseDeleteModal = () => {
    dispatch(setDeleteModalOpen(false));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };


  const contextValue = {
    handleButtonClick,
    handleCloseModal,
    handleCloseDeleteModal,
    handleChangePage,
    handleChangeRowsPerPage,
  };

  return (
    <CommonContext.Provider value={contextValue}>
      {children}
    </CommonContext.Provider>
  );
};

export const useCommonContext = () => {
  const context = useContext(CommonContext);
  if (!context) {
    throw new Error('useCommonContext must be used within a CommonProvider');
  }
  return context;
};
