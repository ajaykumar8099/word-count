import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    userInput: '',
    charList: [],
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  start = event => {
    event.preventDefault()
    const {userInput} = this.state
    const addItems = {
      id: uuidv4(),
      item: userInput,
    }
    this.setState(prev => ({
      charList: [...prev.charList, addItems],
      userInput: '',
    }))
  }

  render() {
    const {userInput, charList} = this.state
    const lengthCount = charList.length === 0
    return (
      <div className="container">
        <div className="left-container">
          <h1 className="heading">Count the characters like a Boss</h1>
          {lengthCount ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="image"
            />
          ) : (
            <ul className="list-container">
              {charList.map(each => (
                <li key={each.id}>
                  <p key={each.id} className="list-element">
                    {each.item} : {each.item.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="right-container">
          <h1 className="right-head">Character Counter</h1>
          <form onSubmit={this.start}>
            <div className="input-container">
              <input
                type="text"
                value={userInput}
                onChange={this.onChangeInput}
                className="input"
                placeholder="Enter the Characters here"
              />
              <button type="button" className="button" onClick={this.start}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default App
