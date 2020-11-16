export default (
  state = {
    loading: false,
  },
  action,
) => {
  switch (action.type) {
    case 'finish_loading':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
