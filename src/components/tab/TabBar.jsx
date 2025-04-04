import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function TabBar({readTab,handleTab}) {
    
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link type='button' onClick={handleTab.bind(this,"READ")} className={readTab ? "active" : ""}>Read</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link type='button' onClick={handleTab.bind(this,"WISH")} className={!readTab ? "active" : ""}>WishList</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabBar;