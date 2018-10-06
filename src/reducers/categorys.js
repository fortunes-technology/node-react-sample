import {
  CATEGORYS_FETCH_REQUEST,
  CATEGORYS_FETCH_SUCCESS,
  CATEGORYS_FETCH_ERROR,
  CATEGORYS_ADD_REQUEST,
  CATEGORYS_ADD_SUCCESS,
  CATEGORYS_ADD_ERROR,
  CATEGORYS_UPDATE_REQUEST,
  CATEGORYS_UPDATE_SUCCESS,
  CATEGORYS_UPDATE_ERROR,
  CATEGORYS_REMOVE_REQUEST,
  CATEGORYS_REMOVE_SUCCESS,
  CATEGORYS_REMOVE_ERROR,
  CATEGORYS_FETCH_SINGLE_REQUEST,
  CATEGORYS_FETCH_SINGLE_SUCCESS,
  CATEGORYS_FETCH_SINGLE_ERROR,
} from '../actionTypes';
const initialState = {
  categorys: {
    "metadata": {
      "resultset": {
          "page": 0,
          "pageSize": 10,
          "pages": -1,
          "sortDesc": false
      }
    },
    "results": []
  },
  isLoading: false,
  isSaving: false,
  category: {

  },
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORYS_FETCH_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case CATEGORYS_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        categorys: action.data
      }

    case CATEGORYS_FETCH_SINGLE_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case CATEGORYS_FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        category: action.data
      }

    case CATEGORYS_ADD_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case CATEGORYS_ADD_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      }

    case CATEGORYS_UPDATE_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case CATEGORYS_UPDATE_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      }

    case CATEGORYS_REMOVE_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case CATEGORYS_REMOVE_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      }

    case CATEGORYS_FETCH_ERROR:
    case CATEGORYS_ADD_ERROR:
    case CATEGORYS_UPDATE_ERROR:
    case CATEGORYS_REMOVE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
}