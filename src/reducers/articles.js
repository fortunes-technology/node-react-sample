import {
  ARTICLES_FETCH_REQUEST,
  ARTICLES_FETCH_SUCCESS,
  ARTICLES_FETCH_ERROR,
  ARTICLES_ADD_REQUEST,
  ARTICLES_ADD_SUCCESS,
  ARTICLES_ADD_ERROR,
  ARTICLES_UPDATE_REQUEST,
  ARTICLES_UPDATE_SUCCESS,
  ARTICLES_UPDATE_ERROR,
  ARTICLES_REMOVE_REQUEST,
  ARTICLES_REMOVE_SUCCESS,
  ARTICLES_REMOVE_ERROR,
  ARTICLES_FETCH_SINGLE_REQUEST,
  ARTICLES_FETCH_SINGLE_SUCCESS,
  ARTICLES_FETCH_SINGLE_ERROR,
} from '../actionTypes';
const initialState = {
  articles: {
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
  article: {

  },
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_FETCH_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case ARTICLES_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        articles: action.data
      }

    case ARTICLES_FETCH_SINGLE_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case ARTICLES_FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        article: action.data
      }

    case ARTICLES_ADD_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case ARTICLES_ADD_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      }

    case ARTICLES_UPDATE_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case ARTICLES_UPDATE_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      }

    case ARTICLES_REMOVE_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case ARTICLES_REMOVE_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      }

    case ARTICLES_FETCH_ERROR:
    case ARTICLES_ADD_ERROR:
    case ARTICLES_UPDATE_ERROR:
    case ARTICLES_REMOVE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
}