import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

SideBar = React.createClass({
   render( ) {
      return (
         <ul id="slide-out" className="side-nav fixed z-depth-2">
            <li className="center no-padding">
               <div className="profile-container indigo darken-2 white-text">
                  <div className="row">
                     <img src="https://res.cloudinary.com/dacg0wegv/image/upload/t_media_lib_thumb/v1463990208/photo_dkkrxc.png" className="circle profile responsive-img profile-img"/>

                     <p className="username">
                        {this.props.currentUser.first_name + this.props.currentUser.last_name || 'Username'}
                     </p>
                  </div>
               </div>
            </li>

            <li id="dash_dashboard">
               <a className="waves-effect" href="#!">
                  <b>Dashboard</b>
               </a>
            </li>
         </ul>
      )
   }
});

export default createContainer( ( ) => {
   return {
      currentUser: Meteor.user( ) || {}
   };
}, SideBar );
