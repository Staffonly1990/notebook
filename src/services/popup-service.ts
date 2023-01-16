class PopupService {

  fun?: React.Dispatch<React.SetStateAction<boolean | undefined>>

  setFun = (fun: any) => {
    this.fun = fun;
  }

  close = () => {
    this.fun && this.fun(false);
  }

  open = () => {
    this.fun && this.fun(true);
  }
}

export const popupService = new PopupService();