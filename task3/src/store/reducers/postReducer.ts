// import {
//   FETCH_POSTS_REQUEST,
//   FETCH_POSTS_SUCCESS,
//   FETCH_POSTS_FAILURE,
//   ADD_POST_REQUEST,
//   ADD_POST_SUCCESS,
//   ADD_POST_FAILURE,
// } from "../constants/actionTypes";

// const initialState = {
//   posts: [],
//   loading: false,
//   error: null,
// };

// const postReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case FETCH_POSTS_REQUEST:
//     case ADD_POST_REQUEST:
//       return { ...state, loading: true, error: null };

//     case FETCH_POSTS_SUCCESS:
//       return { ...state, loading: false, posts: action.payload };

//     case ADD_POST_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         posts: [action.payload, ...state.posts],
//       };

//     case FETCH_POSTS_FAILURE:
//     case ADD_POST_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export default postReducer;

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
} from "../constants/actionTypes";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

type PostAction =
  | { type: typeof FETCH_POSTS_REQUEST }
  | { type: typeof FETCH_POSTS_SUCCESS; payload: Post[] }
  | { type: typeof FETCH_POSTS_FAILURE; payload: string }
  | { type: typeof ADD_POST_REQUEST }
  | { type: typeof ADD_POST_SUCCESS; payload: Post }
  | { type: typeof ADD_POST_FAILURE; payload: string };

const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
    case ADD_POST_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts],
      };

    case FETCH_POSTS_FAILURE:
    case ADD_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default postReducer;
