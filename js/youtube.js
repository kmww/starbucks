const tag = document.createElement("script");


tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "uDpgZNbKEe4",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "uDpgZNbKEe4",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
};