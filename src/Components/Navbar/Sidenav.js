import React from 'react';
import Divider from "@material-ui/core/Divider";

const SideNav = () => {
  return (
    <ul id='slide-out' className='sidenav'>
      <li>
        <div className='center black white-text' style={{ marginTop: '0px' }}>
          <img
            src='https://i1.sndcdn.com/avatars-000689513420-uf8vyh-t500x500.jpg'
            alt='Rex Orange County'
            height='100'
            width='100'
            className='circle'
          />
          <h5>Rex</h5>
          <Divider />
        </div>
        <br></br>
      </li>
      <li>
        <a href='#' style={{fontSize: '15px', align:'center'}}>
          <i className='material-icons'>explore</i>Explore
        </a>
      </li>
      <li>
        <a href='#' style={{fontSize: '15px', textAlign:'auto'}}>
          <i className='material-icons'>history</i>History
        </a>
      </li>
      <li>
        <a href='#' style={{fontSize: '15px', align:'center'}} data-target='addNovelModal' className='modal-trigger'>
          <i className='material-icons'>books</i>Add Book
        </a>
      </li>
    </ul>
  );
};

export default SideNav;