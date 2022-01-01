//

const authEndPoint = "https://accounts.spotify.com/authorize?";
const client_id = "80dc44d1b26442c591a3b7adfdc623cb";
const redirect_uri = "http://localhost:3000/";

const scopes = [
  "user-read-playback-position",
  "user-read-email",
  "user-library-modify",
  "playlist-modify-public",
  "ugc-image-upload",
  "user-follow-modify",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "playlist-modify-private",
  "user-follow-read",
  "user-read-playback-state",
  "user-read-currently-playing",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
];

export const getTokenFromUrl = () =>{
  var access_token = new URLSearchParams(window.location.hash.substr(1)).get('access_token');
  return access_token;
}

export const loginUrl = `${authEndPoint}client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
