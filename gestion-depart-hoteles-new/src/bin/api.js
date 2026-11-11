export async function api(url, options = {}) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  return response;
}