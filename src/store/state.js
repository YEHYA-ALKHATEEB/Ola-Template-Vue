const getDefaultState = () => {
  return {
    session: {
      token: localStorage.getItem("token") || null,
    },
  };
};

const state = getDefaultState();

export { state as default, getDefaultState };
