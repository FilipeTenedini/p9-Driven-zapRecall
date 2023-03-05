import styled from "styled-components";
import { rootColors } from "../../constants/colors";

export const MyButton = styled.button`
    background-color: ${({bgColor}) => bgColor};
    width: 85px;
    height: 37px;
    border-radius: 5px;
    outline: none;
    border: none;
    color: ${rootColors.white};
    margin-bottom: 10px;
    cursor: pointer;
`