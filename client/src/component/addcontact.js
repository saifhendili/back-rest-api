import React, { Component } from "react";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
  
  
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "390px",
    width: "330px",
    backgroundColor: "#1c1e21",
    color: "white"
  }
};

class AddContact extends Component {
  state = {
    isOpen: false,
  
      name: "",
      email: "",
      numtel: "",
      isOpen: false
    
  };

  handleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  closeModal = () => this.setState({ isOpen: false });
  
   handleChange = e =>
   {
      this.setState({
    [e.target.name]: e.target.value 
    });}
    postcontact =e=>{
      e.preventDefault()
      axios
      .post("/New_User",{
        name: this.state.name,
        numtel: this.state.numtel,
        email: this.state.email
      })

      .then(
        this.props.getContacts(),
      this.setState({
        name: '',
        numtel: '',
        email: '',
        isOpen: false 
      })
      
      
      
      )
    }
  render() {
    return (
      <div>
       
 <button
          className="butt "
          onClick={this.handleOpen}
        >ADD</button>
        <Modal
          style={customStyles}
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
        >
             <form style={{  display: "flex",flexDirection: "column",}} onSubmit={
                this.postcontact
        
            }
                
                >
            <label style={{ margin: "15px" }}>
             Adding contact
           </label>
          <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="name..."
              onChange={this.handleChange}
              style={{ margin: "15px",padding:"10px",borderRadius:"5px"}}
            />
            <input
            style={{ margin: "15px" ,padding:"10px",borderRadius:"5px"}}
              type="tel"
              name="numtel"
              value={this.state.numtel}
              placeholder="phone number..."
              onChange={this.handleChange}
            />
            <input
            style={{ margin: "15px" ,padding:"10px",borderRadius:"5px"}}
              type="text"
              name="email"
              value={this.state.email}
              placeholder="valid email..."
              onChange={this.handleChange}
            />
              <button type="submit"
              style={{ margin: "15px" ,padding:"10px",borderRadius:"5px"}}>
                Submit
              </button>
         
              <button style={{ margin: "15px" ,padding:"10px",borderRadius:"5px"}}>
                Cancel
              </button>
      
              </form>
        </Modal>
      </div>
    );
  }
}

export default AddContact;
