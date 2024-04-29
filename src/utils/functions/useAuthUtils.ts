import { useSearchParams } from "react-router-dom";

export default function useAuthUtils() {
  const [searchParams, setSearchParams] = useSearchParams();
  function addAuthToUrl(auth: 'sign_in' | 'sign_up' = 'sign_in') {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('auth', auth);
      return params;
    })
  }
  function removeAuthFromUrl() {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.delete('auth');
      return params;
    })
  }
  return { addAuthToUrl, removeAuthFromUrl, authState: searchParams.get('auth')}
}