import Service from "@/service/src";

export const funcionUseCases = (action, payload) =>
  new Promise((resolve, reject) => {
    Service.useCases(action, payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
