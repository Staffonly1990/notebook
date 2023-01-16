import { Interceptor } from "./Interceptor";


class Init {

  init() {
    Interceptor.init();
  }

}

export const InitService = new Init();