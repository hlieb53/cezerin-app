import PropTypes from "prop-types"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { themeSettings } from "../lib/settings"

const SharedContainer = props => {
  const {
    children,
    state: { currentPage, settings },
  } = props
  const hideFooter =
    (currentPage.path === "/checkout-success" ||
      currentPage.path === "/checkout") &&
    themeSettings.hide_footer_on_checkout === true

  return (
    <>
      <Header {...props} />

      {children}
      {!hideFooter && <Footer settings={settings} />}
    </>
  )
}

SharedContainer.propTypes = {
  children: PropTypes.element.isRequired,
  state: PropTypes.shape({
    currentPage: PropTypes.shape({}),
    settings: PropTypes.shape({}),
  }).isRequired,
}

export default SharedContainer
