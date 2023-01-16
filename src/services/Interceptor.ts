import axios from "axios";


class InterceptorService {

  init() {
    const errorInterceptor = axios.interceptors.response.use(
      response => {
        const data = response.data

        if (data.error) {
          let errorTitle = data.error.title;
          let errorText = data.error.text;

          if (parseInt(data.error.code) <= 500) {
            errorTitle = 'Сервис временно не работате';
            errorText = 'Пожалуйста, попробуйте зайти позже';
          }

          throw data.error;

        }

        return data.body
      },
      error => {
        // RootStore.errorStore.errorText = error.text;
        // RootStore.errorStore.errorTitle = error.title;
      }
    )
    this.add(errorInterceptor)
  }

  add(response: number) {
    axios.interceptors.request.eject(response);
  }
}

export const Interceptor = new InterceptorService();