import React, { useEffect } from "react"

const LinkedInCallback = ({ history }) => {
  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search)

  //   if (!code) {
  //     console.error("Error in LinkedIn authorization")
  //     history.push("/")
  //     return
  //   }

  //   // Exchange the authorization code for an access token.
  //   // You can call a function here to handle the token exchange, then store the access token and use it for LinkedIn API requests.
  // }, [history])

  return (
    <div>
      <h2>Processing LinkedIn authorization...</h2>
    </div>
  )
}

export default LinkedInCallback
