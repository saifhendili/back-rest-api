import React, { Component } from 'react'
import axios from 'axios'

class deletecon extends Component {
    deletecontact=(e)=>{
        e.preventDefault()
        axios
        .delete(`/New_User/${this.props.id}`).then
       ( console.log(this.props.id))
        .then
        (this.props.getContacts)
    }
    render() {
        return (
            <div>
                <button className="button" onClick={this.deletecontact}>delete</button>
            </div>
        )
    }
}
export default deletecon