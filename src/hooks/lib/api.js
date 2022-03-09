const { default: axios } = require("axios");

export const sendComment = async function (resquestData) {
  const { data } = await axios.post(
    `https://lighthouse-comments-default-rtdb.firebaseio.com/comments/${resquestData.productId}.json`,
    resquestData.commentData
  );

  return { commentId: data.name };
};

export const fetchComment = async function (productId) {
  const { data } = await axios.get(
    `https://lighthouse-comments-default-rtdb.firebaseio.com/comments/${productId}.json`
  );

  const loadedComments = [];
  for (const key in data) {
    loadedComments.push({
      id: key,
      ...data[key],
    });
  }

  return loadedComments;
};

export const signUpAccount = async function (requestData) {
  const { data } = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDb39hZDduK_nXXUzbXN24ru6XLmiZa9Ao`,
    {
      email: requestData.email,
      password: requestData.password,
      returnSecureToken: requestData.returnSecureToken,
    }
  );
  return data;
};

export const signInAccount = async function (requestData) {
  const { data } = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDb39hZDduK_nXXUzbXN24ru6XLmiZa9Ao`,
    {
      email: requestData.email,
      password: requestData.password,
      returnSecureToken: requestData.returnSecureToken,
    }
  );

  return data;
};

export const fetchAllProducts = async function () {
  const { data } = await axios.get(`/api/filter-type/filter-type-all`);

  const allProducts = data.filteredProducts.map((product) => ({
    ...product,
    id: product._id.toString(),
  }));

  return allProducts;
};

export const fetchTypeProducts = async function (type) {
  const { data } = await axios.get(`/api/filter-type/filter-type-${type}`);

  const allProducts = data.filteredProducts.map((product) => ({
    ...product,
    id: product._id.toString(),
  }));

  return allProducts;
};
