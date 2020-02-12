import React from "react"
import axios from "axios"
import UserCard from "./Card"

class MainUser extends React.Component {
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/walela`)
      .then(response => {
        this.props.setMainUser(response.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  render() {
    return <UserCard user={this.props.user} />
  }
}

export default MainUser
