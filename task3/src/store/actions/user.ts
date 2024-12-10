import axios, { AxiosError } from "axios";
import endpoints from "../../api/endpoints";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
} from "../constants/actionTypes";
import { AppDispatch, AppThunk } from "../store"; // Adjust the path as needed

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Fetch Posts
export const fetchPosts = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const response = await axios.get<Post[]>(endpoints.posts);
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    const axiosError = error as AxiosError;
    dispatch({ type: FETCH_POSTS_FAILURE, payload: axiosError.message });
  }
};

// Add Post
export const addPost =
  (postData: Post): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: ADD_POST_REQUEST });
    try {
      const response = await axios.post<Post>(endpoints.posts, postData);
      dispatch({ type: ADD_POST_SUCCESS, payload: response.data });
    } catch (error) {
      const axiosError = error as AxiosError;
      dispatch({ type: ADD_POST_FAILURE, payload: axiosError.message });
    }
  };
