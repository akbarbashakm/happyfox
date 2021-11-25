import styled from "styled-components";

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
        margin: 5px;
    }
`;

/**
 * Profile card for List element
 * @param {*} employee 
 * @returns 
 */
const ListProfile = ({
    employee
}) => {

    return (
        <Root>
            <LeftContainer>
                <img src={employee.img} alt="" />
            </LeftContainer>
            <RightContainer>
                <span>{employee.name}</span>
            </RightContainer>
        </Root>
    )

}

export default ListProfile;