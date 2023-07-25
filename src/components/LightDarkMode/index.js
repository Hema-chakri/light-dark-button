// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isInDarkMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({isInDarkMode: !prevState.isInDarkMode}))
  }

  render() {
    const {isInDarkMode} = this.state
    const modeClassName = isInDarkMode ? 'dark-mode' : 'light-mode'
    const titleClassName = isInDarkMode ? 'dark-title' : 'light-title'
    const buttonText = isInDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={modeClassName}>
        <h1 className={titleClassName}>Click To Change Mode</h1>
        <button type="button" onClick={this.onChangeMode} className="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
