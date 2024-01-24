export const useWaitToLoad = (action) => {
  window.addEventListener("load", () => {
    action();
    const intervalId = setInterval(action, 1500);
    // setTimeout(() => {
    //   clearInterval(intervalId);
    // }, 6000);
  });
};
