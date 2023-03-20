import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-nav-container">
              <h1 className="nav-bar-heading">Left Navbar Menu</h1>
              <ul className="ul-list">
                <li className="li-item">item 1</li>
                <li className="li-item">item 2</li>
                <li className="li-item">item 3</li>
                <li className="li-item">item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1>Content</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-nav-container">
              <h1>right Navbar </h1>
              <ul>
                <li className="li-item2">AD 1</li>
                <li className="li-item2">AD 2</li>
              </ul>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
