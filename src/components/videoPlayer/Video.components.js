import ReactPlayer from "react-player";
function VideoPlayer() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width="900px"
      height="400px"
      controls={true}
    />
  );
}

export default VideoPlayer;
