import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link, Route, Routes, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="my-3 px-4 py-3 grid grid-cols-2">
      <Nav className="px-4 py-0 font-semibold">
        <>Gold Killer</>
      </Nav>
      <Nav className="px-4 py-0 grid grid-cols-4 hover:grid-cols-4">
        <Link to="notice/">
          <NavItem>공지사항</NavItem>
        </Link>
        <Link to="activate/">
          <NavItem>탄소 중립 실천 릴레이</NavItem>
        </Link>
        <Link to="users/">
          <NavItem>로그인</NavItem>
        </Link>
        <Link to="user/">
          <NavItem>회원가입</NavItem>
        </Link>

        <Routes>
          <Route path="/notice"></Route>
          <Route path="/activate"></Route>
          <Route path="/users"></Route>
          <Route path="/user"></Route>
        </Routes>
      </Nav>
    </div>
  );
}

export default Navigation;
