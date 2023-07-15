import axios from "axios";

import {
  ALL_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_SUCCESS,
  ADMIN_PROJECT_REQUEST,
  ADMIN_PROJECT_SUCCESS,
  ADMIN_PROJECT_FAIL,
  NEW_PROJECT_REQUEST,
  NEW_PROJECT_SUCCESS,
  NEW_PROJECT_FAIL,
  // UPDATE_PROJECT_REQUEST,
  // UPDATE_PROJECT_SUCCESS,
  // UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  // PROJECT_DETAILS_REQUEST,
  // PROJECT_DETAILS_FAIL,
  // PROJECT_DETAILS_SUCCESS,
  // NEW_REVIEW_REQUEST,
  // NEW_REVIEW_SUCCESS,
  // NEW_REVIEW_FAIL,
  // ALL_REVIEW_REQUEST,
  // ALL_REVIEW_SUCCESS,
  // ALL_REVIEW_FAIL,
  // DELETE_REVIEW_REQUEST,
  // DELETE_REVIEW_SUCCESS,
  // DELETE_REVIEW_FAIL,
  CLEAR_ERRORS,
} from "../constants/projectConstants";

// Get All Projects
export const getProject =
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PROJECT_REQUEST });

      let link = `/api/v1/projects?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `/api/v1/projects?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PROJECT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Projects For Admin
export const getAdminProject = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PROJECT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/projects");

    dispatch({
      type: ADMIN_PROJECT_SUCCESS,
      payload: data.projects,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Project
export const createProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/project/new`,
      projectData,
      config
    );

    dispatch({
      type: NEW_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Project
// export const updateProject = (id, projectData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PROJECT_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(
//       `/api/v1/admin/project/${id}`,
//       projectData,
//       config
//     );

//     dispatch({
//       type: UPDATE_PROJECT_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PROJECT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Delete Project
export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/project/${id}`);

    dispatch({
      type: DELETE_PROJECT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Projects Details
export const getProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/project/${id}`);

    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data.project,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW REVIEW
// export const newReview = (reviewData) => async (dispatch) => {
//   try {
//     dispatch({ type: NEW_REVIEW_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(`/api/v1/review`, reviewData, config);

//     dispatch({
//       type: NEW_REVIEW_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: NEW_REVIEW_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Get All Reviews of a Project
// export const getAllReviews = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_REVIEW_REQUEST });

//     const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

//     dispatch({
//       type: ALL_REVIEW_SUCCESS,
//       payload: data.reviews,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_REVIEW_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Delete Review of a Project
// export const deleteReviews = (reviewId, projectId) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_REVIEW_REQUEST });

//     const { data } = await axios.delete(
//       `/api/v1/reviews?id=${reviewId}&projectId=${projectId}`
//     );

//     dispatch({
//       type: DELETE_REVIEW_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_REVIEW_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
