import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import dragEmployee from '../redux/actions/dragEmployee';
import setActive from '../redux/actions/setActive';
import setToast from '../redux/actions/setToast';
import { canDrag, getNodList } from '../utils/helper';
import { Card, CardImage, Name, Role } from './common-components/Card';
import { Child, Parent } from './common-components/Org';

let rootId = null;
/**
 * Node component logic has been performed here
 * @param {*} parentId 
 * @param {*} employees 
 * @param {*} setActiveEmployee 
 * @param {*} drag 
 * @returns 
 */
const Node = (props) => {
    const {
        parentId = null,
        employees,
        setActiveEmployee,
        drag,
        setToastMessage
    } = props;
    const nodeList = getNodList(employees, parentId);
    if (!nodeList.length)
        return null;
    return (
        <Fragment>
            <Parent className={parentId ? '' : "root"}>
                {
                    nodeList.map((item, index) => {
                        return (
                            <Child key={index}>
                                <Card onClick={(e) => {
                                    e && e.preventDefault();
                                    setActiveEmployee(item)
                                }} id={item} text={item} draggable="true" className="child" onDrop={(e) => {
                                    if (canDrag(employees, item, rootId)) {
                                        drag(item, rootId) 
                                        setToastMessage(`${employees[rootId].name} reporting to ${employees[item].name}`);
                                    } else {
                                        setToastMessage(`Oops... You can't able to move`);
                                    }
                                }} onMouseDown={(e) => {
                                    rootId = item;
                                }} onDragOver={(e) => {
                                    e.preventDefault();
                                }}>
                                    <CardImage src={employees[item].img} />
                                    <Name>{employees[item].name}</Name>
                                    <Role>{employees[item].designation}</Role>
                                </Card>
                                <Node {...props} parentId={item} />
                            </Child>

                        )
                    })
                }
            </Parent>
        </Fragment>
    )
}

const mapStateToProps = ({
    employees
}) => {
    return {
        employees
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveEmployee: bindActionCreators(setActive, dispatch),
        drag: bindActionCreators(dragEmployee, dispatch),
        setToastMessage: bindActionCreators(setToast, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Node);