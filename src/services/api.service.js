import auth from './auth'
import dictionary from "./dictionary";
import platform from "./platform";

const Api = {
  ...auth,
  ...dictionary,
  ...platform,
}

export default Api;
