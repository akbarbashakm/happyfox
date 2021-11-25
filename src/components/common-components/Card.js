/**
 * Common component for Cards which placed in a Org Chart
 * contains Name, Role, Card Image, Root Elemnt
 */

import styled from "styled-components";
import { Child, Parent } from "./Org";

const CardImage = styled.img`
    margin: 0 auto;
    max-width: 60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px #aaa;
    pointer-events: none;
`;

const Name = styled.div`
    font-size: 16px;
    margin: 15px 0 0;
    font-weight: 300;
`;

const Role = styled.div`
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 5px;
`;

const Card = styled.div`
    text-align: center;
    text-decoration: none;
    color: #666;
    display: inline-block;
    padding: 20px 10px;
    transition: all 0.5s;
    background: #fff;
    min-width: 180px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    cursor: pointer;
    &:hover + ${Parent} ${Child} .child,
    &:hover {
        background: #b5d5ef;
        color: #002a50;
        transition: all 0.15s;
        transform: translateY(-5px);
        box-shadow: inset 0 0 0 3px #76b1e1, 0 3px 6px rgba(0, 0, 0, 0.16),
          0 3px 6px rgba(0, 0, 0, 0.23);
          ${CardImage} {
            box-shadow: 0 0 0 5px #4c99d8;
          }
    }
`;

const Title = styled.p`
    display: inline;
    margin: 10px;
    color: white;
    position: absolute;
    top: 5px;
`;

const Logo = styled.img`
    width: 30px;
    height: 30px;
`

export {
    Card,
    CardImage,
    Name,
    Role,
    Title,
    Logo
}