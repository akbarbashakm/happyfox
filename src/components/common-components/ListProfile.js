import styled, { css } from "styled-components";

const Root = styled.div`
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: #000;
    padding: 0.625rem;
    margin: 1px;
    background: #fff;
    height: 50px;
    box-shadow: 0 1px 3px #fff, 0 1px 2px #fff;
    &:hover {
        background: #333;
        color: white;
    }
    ${(props) => props.isActive &&
        css`
        background: #04aa6d;
        color: white;
        &:hover {
            background: #04aa6d;
        }
        `
    }
`;

const LeftContainer = styled.div`
    float: left;
    width: 30px;
    height: 30px;
    background: #efeff4;
    img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
`;

const RightContainer = styled.div`
    float: left;
    display: inline-block;
    margin-left: 10px;
    span {
        display: block;
        margin: 0px;
        font-size: 13px;
        font-style: italic;
    }
`;

/**
 * Profile card for List element
 * @param {*} employee 
 * @returns 
 */
const ListProfile = ({
    employee,
    isActive
}) => {

    return (
        <Root isActive={isActive}>
            <LeftContainer>
                <img src={employee.img} alt="" />
            </LeftContainer>
            <RightContainer>
                <span>{employee.name} </span>
                <span>{employee.designation.split(" ").map(a => a[0])} - {employee.team}</span>
            </RightContainer>
        </Root>
    )

}

export default ListProfile;