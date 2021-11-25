/**
 * Organization Component created here,
 * Navigation, Parent and Child Component has been separated.
 */
import styled from "styled-components";

const Org = styled.div`
    display: flex;
    justify-content: center;
    width: max-content;
`;

const Parent = styled.ul`
    padding-top: 20px;
    position: relative;
    transition: all 0.5s;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        border-left: 1px solid #ccc;
        width: 0;
        height: 19px;
      }
      &.root {
          height: 19px;
          &::before {
              height: 0px;
          }
      }
`;

const Child = styled.li`
    float: left;
    text-align: center;
    list-style-type: none;
    position: relative;
    padding: 20px 10px;
    transition: all 0.5s;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 50%;
        border-top: 1px solid #ccc;
        width: 50%;
        height: 20px;
        right: auto;
        left: 50%;
        border-left: 1px solid #ccc;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 50%;
        border-top: 1px solid #ccc;
        width: 50%;
        height: 20px;
    }
    &:only-child {
        padding-top: 0;
        &::before {
            display: none;
        }
        &::after {
            display: none;
        }
    }
    &:first-child {
        &::before {
            border: 0 none;
        }
        &::after {
            border-radius: 5px 0 0 0;
        }
    }
    &:last-child {
        &::before {
            border-right: 1px solid #ccc;
            border-radius: 0 5px 0 0;
        }
        &::after {
            border: 0 none;
        }
    }
`;

export {
    Org,
    Parent,
    Child
}