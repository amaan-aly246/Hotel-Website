import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import useRefreshToken from "../hooks/useRefreshToken"
import useAuth from "../hooks/useAuth"
function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const { auth, persist } = useAuth()
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.log(  'error during token refresh',err)
      } finally {
        setIsLoading(false)
      }
    }
    if (persist && !auth?.accessToken) {
      verifyRefreshToken()
    }
    else{
      setIsLoading(false)
    }
  }, [])


  // for testing purposes

  // useEffect(() => {
  //   console.log("isLoading ", isLoading)
  //   console.log("auth token ", auth.accessToken)
  //   console.log('persist',persist)
  // }, [isLoading, auth])

  return (
    <>{isLoading ? <p>Loading...</p> : <Outlet />}</>
  )
}

export default PersistLogin
