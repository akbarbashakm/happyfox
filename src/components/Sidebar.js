/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchField from 'react-search-field';
import { LeftSiderBar } from './common-components/Layout';
import ListProfile from './common-components/ListProfile';
import { search } from '../utils/helper';
import setParent from '../redux/actions/setParent';

/**
 * Side bar component render here
 * @param {*} employees 
 * @param {*} setActiveEmployee 
 * @returns 
 */
function SideBar({
    employees = {},
    setParentEl
}) {
    const [serachValue, setValue] = useState("")
    return (
        <LeftSiderBar>
            <SearchField
                placeholder='Search Employee'
                onChange={(value) => {
                    setValue(value)
                 }}
            />
            <ul>
                {
                    search(employees, serachValue).map((key, index) => {
                        return (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <li onClick={(e) => {
                                e && e.preventDefault();
                                setParentEl(key)
                            }} key={index}>
                                <ListProfile employee={employees[key]} />
                            </li>
                        )
                    })
                }
            </ul>
        </LeftSiderBar>
    );
}

const mapStateToProps = ({ employees }) => {
    return {
        employees
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setParentEl: bindActionCreators(setParent, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);