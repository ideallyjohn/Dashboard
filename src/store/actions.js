import * as actionTypes from '../store/types';

export const addWidget = (widget) => {
  return {
    type: actionTypes.ADD_WIDGET,
    payload: widget,
  };
};

export const removeWidget = (id) => {
  return {
    type: actionTypes.REMOVE_WIDGET,
    payload: id,
  };
};

export const updateWidget = (id, data) => {
  return {
    type: actionTypes.UPDATE_WIDGET,
    payload: { id, data },
  };
};

export const setLayout = (layout) => {
  return {
    type: actionTypes.SET_LAYOUT,
    payload: layout,
  };
};

export const setShowHeader = (value) => {
  return {
    type: actionTypes.SET_SHOW_HEADER,
    payload: value,
  };
};
