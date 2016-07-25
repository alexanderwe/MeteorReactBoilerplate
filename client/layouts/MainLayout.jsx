import React from 'react';

export const MainLayout = ({content}) => (
  <div className ="main-layout">
    <header>
      <h2><a href="/">My React and Meteor App</a></h2>
      <nav>
        <a href="#">Nav Link 1</a>
        <a href="#">Nav Link 2</a>
      </nav>
    </header>
    <main>
        {content}
    </main>
  </div>
)
