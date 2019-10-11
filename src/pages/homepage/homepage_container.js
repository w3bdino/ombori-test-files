import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserListsContainer from '../../components/userlists/userlists_container';

class homepage_container extends Component {
  componentDidMount() {
    this.props.listUsers(this.props.userlist); // load initial users
  }
  
  render() {
    // console.log(this.props.userlist);
    return (
      <div className="app-container">
        <div className="app-wrap">
          <UserListsContainer />
        </div>
      </div>
    )
  }
}

homepage_container.propTypes = {
  userlist: PropTypes.object.isRequired,
  listUsers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userlist: state.userlist,    
})

const mapDispatchToProps = dispatch => {
  return {
    listUsers: (page) => dispatch({ type: "USERS_REQUEST", payload: page }),  
  }    
}

export default connect(mapStateToProps, mapDispatchToProps)(homepage_container)
