import { useWaitToLoad } from "../../lib/useWaitToLoad";
import "../../styles/pip.css";

const icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M134.08,154.79a8,8,0,0,0-12.15,0l-48,56A8,8,0,0,0,80,224h96a8,8,0,0,0,6.07-13.21ZM97.39,208,128,172.29,158.61,208ZM232,64V176a24,24,0,0,1-24,24H192a8,8,0,0,1,0-16h16a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8H64a8,8,0,0,1,0,16H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Z"></path></svg>';

const addPipButton = () => {
  const [$video] = document.getElementsByTagName("video");
  const $parent = $video.parentElement.parentElement;

  const $prevPipButton = document.getElementById("pip-button");

  if (!$prevPipButton) {
    const $button = document.createElement("button");

    $button.id = "pip-button";
    $button.innerHTML = icon;
    $button.addEventListener("click", () => {
      $video.requestPictureInPicture();
    });
    console.log("Aguacate");
    $parent.append($button);
    $parent.classList.add("pip-parent");
  }
};

useWaitToLoad(addPipButton);
