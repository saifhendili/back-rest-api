import React, { Component } from 'react'
import axios from 'axios'
import AddContact from './addcontact'
import Deletecon from './deletecon'
import Edit from './edit'
class getcontact extends Component {
    state={
        contactlist:[]
    }

    getContacts =()=>
    {
        axios
        .get("/New_User")
        .then(res=>this.setState({contactlist:res.data}))
        .catch(err => {
            alert("Error cannot fetch data from the server!");
            console.error(err);
          });
    }
    componentDidMount =()=>  this.getContacts()
    
    render() {
      
        return (
            <div className="main">
                       <AddContact getContacts={this.getContacts} />
                {
                    <ul className="allcontact">
                        {this.state.contactlist.map((el,i)=>el.name&&el.numtel&&el.email?<li>
                            <ul key={i} className={`contact${i} contact`}  ><li>{el.name}</li>
                            <li className="email">{el.email}</li>
                            <li>{el.numtel}</li>
                            <div className="mybutt"> <li><Deletecon id={el._id} getContacts={this.getContacts}/></li>
                           <li><Edit  id={el._id} getContacts={this.getContacts} /></li>
                            </div>
                           </ul>
                            </li>:null)}
                    </ul>
                    
                }
         
            </div>
        )
    }
}
export default getcontact