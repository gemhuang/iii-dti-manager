export default (
  state = {
    now: new Date()
  },
  action,
) => {
  switch (action.type) {
    case 'now':
      return {
        ...state,
        now: new Date()
      }
    default:
      return state;
  }
};
