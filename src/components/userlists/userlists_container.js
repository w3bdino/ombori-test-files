// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import SpinnerHOC from '../spinner/spinnerHOC'
import Userlists from "./userlists";

const mapStateToProps = state => ({
  isloading: state.userlist.isloading,
});

const UserListsContainer = compose(
  connect(mapStateToProps),
  SpinnerHOC
)(Userlists);

export default UserListsContainer;