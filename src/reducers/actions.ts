// Action Types
export const SET_OPEN = 'SET_OPEN';
export const SET_DELETE_MODAL_OPEN = 'SET_DELETE_MODAL_OPEN';
export const SET_PAGE = 'SET_PAGE';
export const SET_ROWS = 'SET_ROWS';
export const SET_ROWS_PER_PAGE = 'SET_ROWS_PER_PAGE';
export const SET_SELECTED_NAME = 'SET_SELECTED_NAME';
export const SET_NAME = 'SET_NAME';

// Action Creators
export const setSelectedDietName = (selectedName: string) => ({
    type: SET_SELECTED_NAME,
    payload: selectedName,
});
  
export const setName = (name: string) => ({
    type: SET_NAME,
    payload: name,
});

export const setOpen = (open: boolean) => ({
  type: SET_OPEN,
  payload: open,
});

export const setDeleteModalOpen = (deleteModalOpen: boolean) => ({
  type: SET_DELETE_MODAL_OPEN,
  payload: deleteModalOpen,
});

export const setPage = (page: number) => ({
  type: SET_PAGE,
  payload: page,
});

export const setRows = (rows: any[]) => ({
  type: SET_ROWS,
  payload: rows,
});

export const setRowsPerPage = (rowsPerPage: number) => ({
  type: SET_ROWS_PER_PAGE,
  payload: rowsPerPage,
});
