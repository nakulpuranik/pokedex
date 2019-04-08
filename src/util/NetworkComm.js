
import promise from "promise";
import axios from "axios";

/**
 * Make a Get API call with promise.
 * @param {string} url API url to get.
 * @param {string} token Access token.
 * @returns returns a promise.
 */
export const getApiCallWithPromise = (url, token) => {
  return new promise(function(resolve, reject) {
    if (!INTERNET.mConnected) {
      reject();
      return noInternetAlert();
    }
    axios
      .get(`${url}`, getRequestConfig(token))
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
        if (url == getLinkedPractices && error["response"]["status"] == 404)
          return;
        handleServerError(error);
      });
  });
};