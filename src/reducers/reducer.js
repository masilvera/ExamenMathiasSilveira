export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
      case 'ADD_TO_FAVORITES':
        return { ...state, favorites: [...state.favorites, action.payload] };
      default:
        return state;
    }
  };
  