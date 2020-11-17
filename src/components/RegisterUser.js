import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../actions/users'
import { ChooseImage } from './ChooseImage'
import Login from './Login';


class RegisterUser extends Component {
    state = {
        id: '',
        name: '',
        avatarURL: '',
        redirect: false
    }

    createUser = e => {
        try {
            const {id, name, avatarURL} = this.state
            const userProperties = {
                id: id,
                name: name,
                avatarURL: avatarURL 
            }
            this.props.dispatch(createNewUser(userProperties))
            this.setState({
                redirect: true
            })
        } catch (error) {
            console.log(error, "An error occured while creating user.")
        }
    }

    goBack = e => {
        this.setState({
            redirect: true
        })
    }

    _handleImageChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.readAsDataURL(file)
        reader.onloadend = () => {
        this.setState({
            avatarURL: URL.createObjectURL(file)
        });
        }
    }
    
    render() {
      const {id, name, avatarURL, redirect} = this.state;
      let disabled = false;
      if (id === '' || name === '' || avatarURL === '') {
          disabled = true
      }

      if (redirect) {
        return (
            <Login/>
        )
      }

      return (
        <div className='container'>
            <div className="row">
                <div className="col-3 mx-auto">
                    <h3>Create New User:</h3>
                    <div className='text-center'>
                        <input type='text' placeholder='Username'  onChange={(e) => this.setState({ id: e.target.value })} value={this.state.id} className="input"></input>
                        <input type='text' placeholder='Name'  onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} className="input"></input>
                        <ChooseImage handleImageUpload={this._handleImageChange.bind(this)}/>
                        { avatarURL && <img src={avatarURL} alt="General Avatar" className="avatar"></img>}
                        <button className={`app-btn ${disabled && "btn-outline-secondary"}`} disabled={disabled} onClick={this.createUser.bind(this)}>
                            Create
                        </button>
                        <button className='app-btn' onClick={this.goBack.bind(this)}>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default connect()(RegisterUser)