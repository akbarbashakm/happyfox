import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setActive from "../../redux/actions/setActive";

const Modal = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    img {
        width: 100%;
        user-select:  none;
    }
    position: fixed;
    z-index: 1111;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const Close = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 22px;
    font-weight: bold;
    padding: -23px;
    position: absolute;
    right: 3px;
    top: -3px;
    &:focus,
    &:hover {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Root = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 300px;
    position: relative;
`;

/**
 * Modal for Profile component it will show the basic information about the active user
 * @param {*} setActiveEmployee 
 * @param {*} employees 
 * @param {*} activeEmp 
 * @returns 
 */
const Profile = ({
    setActiveEmployee,
    employees,
    activeEmp
}) => {

    return (
        <Modal active={activeEmp}>
            {activeEmp ? <Root>
                <Close onClick={() => {
                    setActiveEmployee(null)
                }}>&times;</Close>
                <img src={employees[activeEmp].img} alt="Avatar" />
                <div className="container">
                    <h4><b>{employees[activeEmp].name}</b></h4>
                    <p>{employees[activeEmp].designation}</p>
                    <p>{employees[activeEmp].team}</p>
                </div>
            </Root> : null}
        </Modal>
    )
}

const mapStateToProps = ({
    employees,
    activeEmp
}) => {
    return {
        employees,
        activeEmp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveEmployee: bindActionCreators(setActive, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);