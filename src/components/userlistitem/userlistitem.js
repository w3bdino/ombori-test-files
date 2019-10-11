import React from 'react'
import PropTypes from 'prop-types'
import './userlistitem.scss';

const UserItem = ({ first_name, last_name, avatar }) => {
  return (
    <div className='useritem-container'>
      <div className='item-wrap'>
        <div className='col-wrap'>
          <div className='col col-3'>
            <img src={avatar} />
          </div>
          <div className='col col-9'>
            <div className="vertical-align">
              {first_name} {last_name}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,    
};

export default UserItem
