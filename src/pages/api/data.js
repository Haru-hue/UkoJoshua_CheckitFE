import axios from "axios";

export const fetchAllCapsules = async () => {
  return await axios.get("https://api.spacexdata.com/v3/capsules")
}