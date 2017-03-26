import React from 'react';
import { Meteor } from 'meteor/meteor';
import $ from 'jquery';

import SideBar from '../components/navigation/SideBar';
import TopBar from '../components/navigation/TopBar';

const MainLayout = React.createClass({
   render( ) {
      return (
         <div>
            <SideBar/>
            <TopBar title={this.props.title}/>
            <main>
               {this.props.content}
            </main>
         </div>
      )
   }
});

export default MainLayout;
