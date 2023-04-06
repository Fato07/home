import axios from "axios";

const API_BASE_URL = "https://api.linkedin.com/v2/";

const getJobExperiences = async (accessToken) => {
 const config = {
  headers: {
   Authorization: `Bearer ${accessToken}`,
  },
 };

 const userProfile = await axios.get(`${API_BASE_URL}me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams),positions)`, config);
 return userProfile.data.positions.values;
};

export { getJobExperiences };
