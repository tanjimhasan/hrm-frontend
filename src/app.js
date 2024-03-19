import React, { useEffect, useState } from 'react'
import { Provider, useSelector } from 'react-redux'

function ProviderConfig() {
  const { rtl, isLoggedIn, topMenu, darkMode } = useSelector((state) => {
    return {
      darkMode: state.ChangeLayoutMode.data,
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      isLoggedIn: state.auth.login,
    }
  })

  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
      setPath(window.location.pathname)
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true)
  }, [setPath])

  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...theme, rtl, topMenu, darkMode }}>
        <Router basename={process.env.PUBLIC_URL}>
          {!isLoggedIn ? (
            <Route path="/" component={Auth} />
          ) : (
            <ProtectedRoute path="/admin" component={Admin} />
          )}
          {isLoggedIn &&
            (path === process.env.PUBLIC_URL ||
              path === `${process.env.PUBLIC_URL}/`) && (
              <Redirect to="/admin" />
            )}
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default function App() {
  return (
    <div className="test">
      <p>Hi! Welcome Everyone</p>
    </div>
  )
}
