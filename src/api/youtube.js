import axios from "axios";

const KEY = "AIzaSyBFssTOt71Uu4V3o6ijHbS7isqoTaRDq3c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
