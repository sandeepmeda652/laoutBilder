import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationControl = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const contentChangeLocal = e => {
        onToggleShowContent(e.target.checked)
      }
      const leftNavbarChangeLocal = e => {
        onToggleShowLeftNavbar(e.target.checked)
      }
      const rightNavbarChangeLocal = e => {
        onToggleShowRightNavbar(e.target.checked)
      }
      return (
        <div className="inputElements">
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="Content"
              onChange={contentChangeLocal}
              value="Content"
              defaultChecked
            />
            <label htmlFor="Content">Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="LeftNavbar"
              onChange={leftNavbarChangeLocal}
              value="Left Navbar"
              defaultChecked
            />
            <label htmlFor="LeftNavbar">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="RightNavbar"
              onChange={rightNavbarChangeLocal}
              value="Right Navbar"
              defaultChecked
            />
            <label htmlFor="RightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationControl
