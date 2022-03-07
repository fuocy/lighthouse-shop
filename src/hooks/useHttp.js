import { useReducer, useCallback } from "react";

export const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
};

export default function useHtttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });

      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (err) {
        let message = "Something went wrong!";

        if (err.message) {
          message = err.message;
        }

        if (err.response.data.error.message === "EMAIL_EXISTS") {
          message = "the email you entered is already used.";
        }

        if (err.response.data.error.message === "INVALID_PASSWORD") {
          message = "the password you entered is incorrect.";
        }

        if (err.response.data.error.message === "EMAIL_NOT_FOUND") {
          message = "the email you entered is incorrect.";
        }

        if (err.response.data.error.message === "INVALID_EMAIL") {
          message =
            "the email you entered is not even an email. You're ok? bro";
        }

        if (
          err.response.data.error.message ===
          "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
        ) {
          message =
            "you failed so many login attempts. You are a hacker, aren't you?";
        }

        dispatch({
          type: "ERROR",
          errorMessage: message,
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}
