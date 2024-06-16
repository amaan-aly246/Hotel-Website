// this is a custom hook to attach axios 'interceptor' on 'axiosPrivate' instance of axios.

import { axiosPrivate } from "../config/axios"
import { useEffect } from "react"
import useRefreshToken from "./useRefreshToken"
import useAuth from "./useAuth"

function useAxiosPrivate() {
  const refresh = useRefreshToken()
  const { auth } = useAuth()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.response.use(
      (config) => {
        // this is the first time request
        if (!config.headers["Authorization"]) {
          config.headers["getAuthorization"] = `Bearer ${auth?.accessToken}`
        }
        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error.response.status === 403 && !prevRequest?.responseIntercept) {
          prevRequest = true
          const newAccessToken = await refresh()
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
          return axiosPrivate(prevRequest)
        }
        return Promise.reject(error)
      }
    )

    return () => {
      axiosPrivate.interceptors.response.eject(requestIntercept)
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [auth, refresh])
  return axiosPrivate
}

export default useAxiosPrivate
