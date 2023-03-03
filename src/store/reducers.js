import * as actionTypes from './types';

const initialState = {
  widgets: [],
  layout: {
    columns: [1, 1, 1],
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    containerPadding: { lg: 16, md: 16, sm: 16, xs: 16, xxs: 16 },
    rowHeight: 30,
    margin: [10, 10],
  },
  showHeader: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_WIDGET:
      return {
        ...state,
        widgets: [...state.widgets, action.payload],
      };
    case actionTypes.REMOVE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter((widget) => widget.id !== action.payload),
      };
    case actionTypes.UPDATE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.map((widget) =>
          widget.id === action.payload.id
            ? { ...widget, ...action.payload.data }
            : widget
        ),
      };
    case actionTypes.SET_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };
    case actionTypes.SET_SHOW_HEADER:
      return {
        ...state,
        showHeader: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
