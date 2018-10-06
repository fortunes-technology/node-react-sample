import axios from 'axios';
import { AuthManager } from '../utils';
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
  CATEGORYS_FETCH_SINGLE_ERROR
} from '../actionTypes';
export const fetchCategorys = (query) => async dispatch => {
  try {
    dispatch({ type: CATEGORYS_FETCH_REQUEST });

    const url = `/api/categorys`;

    const { data } = await axios({
      method: 'GET',
      params: query,
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      }
    });

    dispatch({ type: CATEGORYS_FETCH_SUCCESS, data });
    return data;
  } catch(error) {
    dispatch({ type: CATEGORYS_FETCH_ERROR, error: error.response.data });
  }
  return null;
}

export const fetchSingleCategory = (idOrSlug, isSlug = false) => async dispatch => {
  try {
    dispatch({ type: CATEGORYS_FETCH_SINGLE_REQUEST });
    let url = `/api/categorys/${idOrSlug}`;
    if (isSlug) {
      url = `/api/categorys/slug/${idOrSlug}`;
    }
    const { data } = await axios({
      method: 'GET',
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      }
    });

    dispatch({ type: CATEGORYS_FETCH_SINGLE_SUCCESS, data });
    return data;
  } catch(error) {
    dispatch({ type: CATEGORYS_FETCH_SINGLE_ERROR, error: error.response.data });
  }
  return null;
}

export const addCategory = (category) => async dispatch => {
  try {
    dispatch({ type: CATEGORYS_ADD_REQUEST });

    const url = `/api/categorys`;

    const { data } = await axios({
      method: 'POST',
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      },
      data: category
    });

    dispatch({ type: CATEGORYS_ADD_SUCCESS, data });
    // await dispatch(fetchCategorys({}));
    return data;
  } catch(error) {
    dispatch({ type: CATEGORYS_ADD_ERROR, error: error.response.data });
  }
  return null;
}

export const updateCategory = (id, category) => async dispatch => {
  try {
    dispatch({ type: CATEGORYS_UPDATE_REQUEST });

    const url = `/api/categorys/${id}`;

    const { data } = await axios({
      method: 'PUT',
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      },
      data: category
    });

    dispatch({ type: CATEGORYS_UPDATE_SUCCESS, data });
    // await dispatch(fetchCategorys());
    return data;
  } catch(error) {
    dispatch({ type: CATEGORYS_UPDATE_ERROR, error: error.response.data });
  }
  return null;
}

export const removeCategory = (index) => async dispatch => {
  try {
    dispatch({ type: CATEGORYS_REMOVE_REQUEST });

    const url = `/api/categorys/${index}`;

    const { data } = await axios({
      method: 'DELETE',
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      }
    });

    dispatch({ type: CATEGORYS_REMOVE_SUCCESS, data });
    await dispatch(fetchCategorys());
  } catch(error) {
    dispatch({ type: CATEGORYS_REMOVE_ERROR, error: error.response.data });
  }
}
