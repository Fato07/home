import React, { useEffect } from "react"

const LinkedInCallback = ({ history }) => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")
    const state = params.get("state")

    if (!code || state !== "123456") {
      console.error("Error in LinkedIn authorization")
      history.push("/")
      return
    }

    // Exchange the authorization code for an access token.
    // You can call a function here to handle the token exchange, then store the access token and use it for LinkedIn API requests.
  }, [history])

  return (
    <div>
      <h2>Processing LinkedIn authorization...</h2>
    </div>
  )
}

export default LinkedInCallback

// https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78ywaqnshvzsdu&redirect_uri=https://fato07.github.io/home/linkedin-callback&state=123456&scope=r_liteprofile%20r_emailaddress%20w_member_social
