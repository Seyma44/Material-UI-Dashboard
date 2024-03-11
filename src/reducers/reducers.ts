import { 
  SET_OPEN, 
  SET_DELETE_MODAL_OPEN, 
  SET_PAGE, 
  SET_ROWS, 
  SET_ROWS_PER_PAGE,
  SET_SELECTED_NAME,
  SET_NAME 
} from './actions';

// Initial State
const initialState = {
  open: false,
  deleteModalOpen: false,
  page: 0,
  rows: [],
  rowsPerPage: 5,
  selectedName: '',
  name: '',
};

// Reducer function
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_OPEN:
      return { ...state, open: action.payload };
    case SET_DELETE_MODAL_OPEN:
      return { ...state, deleteModalOpen: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_ROWS:
      return { ...state, rows: action.payload };
    case SET_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.payload };
    case SET_SELECTED_NAME:
        return { ...state, selectedName: action.payload };
    case SET_NAME:
        return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
