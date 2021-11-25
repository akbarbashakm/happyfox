/**
 * Layout component implementd here.
 * Left Side, Right Side and Header has been created.
 */

import styled from "styled-components";

const Header = styled.div`
    overflow: hidden;
    background-color: #333;
    padding: 10px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1000;
`;

const LeftSiderBar = styled.div`
    float: left;
    width: 20%;
    height: inherit;
    position: fixed;
    z-index: 100;
    border-right: 1px solid whitesmoke;
    .react-search-field  {
      width: 100%;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: inherit;
        background-color: #fff;
      }
      li a {
        display: block;
        padding: 10px;
        cursor: pointer;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
      }
      
      li span.active {
        background-color: #04aa6d;
        color: white;
      }
      
      li a:hover:not(.active) {
        background-color: #555;
        color: white;
      }
`;

const Main = styled.div`
    float: left;
    padding: 10px;
    width: 80%;
    height: inherit;
    position: absolute;
    left: 20%;
`;

const Layout = styled.div`
    height: inherit;
    overflow-x: scroll;
    padding-top: 55px;
    margin: 10px 0px;
`;

export {
    Main,
    Header,
    LeftSiderBar,
    Layout
}