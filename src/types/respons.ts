type responseError = {
  error: {
    code: string
    text: string
  }
}

type responseBody<D = unknown> = {
  body: D,
  success: boolean
}
export type responseWrapper<D = unknown> = responseBody<D> & responseError