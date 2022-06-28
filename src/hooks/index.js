export const getAuth = () => {
  const auth = localStorage.getItem("ssp12Auth");

  if (auth) {
    return {
      authenticated: true,
    };
  }

  return {
    authenticated: false,
  };
};
