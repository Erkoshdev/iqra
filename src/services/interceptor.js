import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useCommonStore } from "@/stores/common";
import { useNotification } from "@kyvg/vue3-notification";
import router from "../router";

const http = axios.create({
  baseURL: 'https://back-dev.iqra.space/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

http.interceptors.request.use((config) => {
    const commonStore = useCommonStore()
    const store = useAuthStore()
    const token = store.getToken;
    config.headers['locale'] = commonStore.getLang;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(async(res) => {
  return (res && res.data) || res;
},  (error) => {
  const {
    status,
    data,
  } = error.response;

  const { notify } = useNotification()

  notify({
    title: 'Ошибка',
    text: data.message,
    type: 'error'
  });

  const commonStore = useCommonStore()
  const store = useAuthStore()

  if (status === 401) {
    store.logout()
    router.push({name: 'VLogin'})
  }



  if (data?.errors) {
    Object.keys(data?.errors).forEach((key) => {
      commonStore.addValidationError(key, data?.errors[key]);
    });
  }
  return Promise.reject(error)
});


export const removeToken = (data, headers) => {
  delete headers.Authorization;
  headers['Content-Type'] = 'application/json; charset=utf8';
  return JSON.stringify(data);
};

export default http;
