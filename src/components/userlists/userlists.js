import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import UserItem from '../userlistitem/userlistitem';
import './userlists.scss';

const Userlists = ({ userListInfo, loadMoreUsers }) => { 
    
  const loadFunc = (data) => {
    // console.log('loadFunc', userListInfo);
    loadMoreUsers(userListInfo)
  }

  const { userlists, has_more } = userListInfo;
  console.log(userListInfo);
  return (
    <div>
      <div className="scroll-wrap">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={has_more}
          loader={(
            <div className='spinner-load-more'>
              <div className='spinner-container'></div>
            </div>
          )}
          useWindow={false}
        >
          {userlists.map((userItem) => (
            <UserItem key={userItem.id} {...userItem} />
          ))}    
        </InfiniteScroll>
      </div>
    </div>
  )
}

Userlists.propTypes = {
  userListInfo: PropTypes.object.isRequired,
  loadMoreUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userListInfo: state.userlist,    
})

const mapDispatchToProps = dispatch => {
  return {
    loadMoreUsers: (page) => dispatch({ type: "LOAD_MORE_USERS_REQUEST", payload: page }),     
  }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlists)
