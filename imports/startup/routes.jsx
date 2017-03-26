import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';

import MainLayout from '../ui/layouts/MainLayout';
import Dashboard from '../ui/components/Dashboard';

FlowRouter.route('/', {
   name: 'App_home',
   action: function( ) {
      mount(MainLayout, { content: <Dashboard/>, title: 'Dashboard' })
   }
})
