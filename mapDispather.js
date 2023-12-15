import { ACTIONS } from './learning.reducer';
import { getBootstrapData } from '../approvalManagement/ApprovalMapping/actions/approvalmapping.actions';
export const updateCounter = (payload) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_COUNTER,
    payload: {
      count: payload.value,
    },
  });
};

export const updateHeader = (payload) => async (dispatch) => {
  const value = payload.value;
  const response = await getBootstrapData();
  let header;
  if (value % 2 === 0) {
    header = response.actionTypes[0];
  } else {
    header = response.modules[0];
  }
  dispatch({
    type: ACTIONS.SET_HEADER,
    payload: {
      header,
    },
  });
};
