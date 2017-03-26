import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

TopBar = React.createClass({
   render( ) {
      return (
         <header>
            <ul className="dropdown-content" id="user_dropdown">
               <li>
                  <a className="indigo-text" href="#!">Profile</a>
               </li>
               <li>
                  <a className="indigo-text" href="#!">Logout</a>
               </li>
            </ul>

            <nav className="indigo" role="navigation">
               <div className="nav-wrapper">
                  <a data-activates="slide-out" className="button-collapse show-on-" href="#!">
                     <i className="material-icons">menu</i>
                  </a>

                  <ul className="right hide-on-med-and-down">
                     <li>
                        <a className='right dropdown-button' href='' data-activates='user_dropdown'>
                           <i className='material-icons'>account_circle</i>
                        </a>
                     </li>
                  </ul>

               </div>
            </nav>

            <nav>
               <div className="nav-wrapper indigo darken-2">
                  <a className="breadcrumb title" href="#!">{this.props.title}</a>

               </div>
            </nav>
         </header>
      )
   },
   componentDidMount( ) {
      $( document ).ready( function( ) {
         $( '.button-collapse' ).sideNav( );

         $( 'select' ).material_select( );
      })
   }
});

export default TopBar;
