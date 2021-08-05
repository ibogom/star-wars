export function useFetch(): typeof fetch {
  return async (...args: Parameters<typeof fetch>) => {
    const request = new Request(...args);

    const response = await fetch(request);

    if (response?.status >= 400) {
      throw new Error(
        `HTTP request ${request.method} ${request.url} failed with response code [${response?.status}]`
      );
    }

    return response;
  };
}
