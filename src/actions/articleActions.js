import axios from 'axios';
import { AuthManager } from '../utils';
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
  ARTICLES_FETCH_SINGLE_ERROR
} from '../actionTypes';
export const fetchArticles = (query) => async dispatch => {
  try {
    dispatch({ type: ARTICLES_FETCH_REQUEST });

    const url = `/api/articles`;

    const { data } = await axios({
      method: 'GET',
      params: query,
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      }
    });

    dispatch({ type: ARTICLES_FETCH_SUCCESS, data });
    return data;
  } catch(error) {
    dispatch({ type: ARTICLES_FETCH_ERROR, error: error.response.data });
  }
  return null;
}

export const fetchSingleArticle = (idOrSlug, isSlug = false) => async dispatch => {
  try {
    dispatch({ type: ARTICLES_FETCH_SINGLE_REQUEST });
    let url = `/api/articles/${idOrSlug}`;
    if (isSlug) {
      url = `/api/articles/slug/${idOrSlug}`;
    }
    const { data } = await axios({
      method: 'GET',
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      }
    });

    dispatch({ type: ARTICLES_FETCH_SINGLE_SUCCESS, data });
    return data;
  } catch(error) {
    dispatch({ type: ARTICLES_FETCH_SINGLE_ERROR, error: error.response.data });
  }
  return null;
}

export const addArticle = (article) => async dispatch => {
  try {
    dispatch({ type: ARTICLES_ADD_REQUEST });

    const url = `/api/articles`;

    const { data } = await axios({
      method: 'POST',
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      },
      data: article
    });

    dispatch({ type: ARTICLES_ADD_SUCCESS, data });
    // await dispatch(fetchArticles({}));
    return data;
  } catch(error) {
    dispatch({ type: ARTICLES_ADD_ERROR, error: error.response.data });
  }
  return null;
}

export const updateArticle = (id, article) => async dispatch => {
  try {
    dispatch({ type: ARTICLES_UPDATE_REQUEST });

    const url = `/api/articles/${id}`;

    const { data } = await axios({
      method: 'PUT',
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      },
      data: article
    });

    dispatch({ type: ARTICLES_UPDATE_SUCCESS, data });
    // await dispatch(fetchArticles());
    return data;
  } catch(error) {
    dispatch({ type: ARTICLES_UPDATE_ERROR, error: error.response.data });
  }
  return null;
}

export const removeArticle = (index) => async dispatch => {
  try {
    dispatch({ type: ARTICLES_REMOVE_REQUEST });

    const url = `/api/articles/${index}`;

    const { data } = await axios({
      method: 'DELETE',
      url,
      headers: {
        'Authorization': AuthManager.getBearerToken()
      }
    });

    dispatch({ type: ARTICLES_REMOVE_SUCCESS, data });
    await dispatch(fetchArticles());
  } catch(error) {
    dispatch({ type: ARTICLES_REMOVE_ERROR, error: error.response.data });
  }
}
