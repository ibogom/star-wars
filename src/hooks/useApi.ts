import { createApi } from "api";

export function useApi() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return createApi({ baseUrl: process.env.REACT_APP_API_BASE_URL! });
}
