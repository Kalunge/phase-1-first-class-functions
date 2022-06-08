const receivesAFunction = (fn) => {
  fn();
};

const returnsANamedFunction = () => {
  const fn = () => {};
  return fn;
};

const returnsAnAnonymousFunction = () => {
  return function () {};
};
