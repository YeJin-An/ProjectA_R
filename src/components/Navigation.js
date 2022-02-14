import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Link to="notice/">
          <NavItem>공지사항</NavItem>
        </Link>
        <Link to="activate/">
          {" "}
          <NavItem>틴소 중립 실천 릴레이</NavItem>
        </Link>
        <Link to="user/">
          {" "}
          <NavItem>로그인</NavItem>
          <NavItem>회원가입</NavItem>
        </Link>
      </Nav>
    );
  }
}
