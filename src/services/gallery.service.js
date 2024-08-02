import axios from "axios";
import { getCurrentUser } from "./auth.service";

const GALLERY_URL = `${process.env.REACT_APP_API_ROOT}/v1/gallery/`;

export const getGallery = (id) => {
  return axios.get(GALLERY_URL + id).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const saveGallery = (image) => {
  return axios
    .post(GALLERY_URL, { image, userId: getCurrentUser().user.id })
    .then((response) => {
      return response.data;
    });
};

export const removeGallery = (id) => {
  return axios.delete(GALLERY_URL + id).then((response) => {
    console.log(response);
    return response.data;
  });
};
