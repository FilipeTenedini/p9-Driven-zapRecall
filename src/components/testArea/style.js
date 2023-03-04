import styled from "styled-components";
import { rootColors } from "../../constants/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`
export const Header = styled.header`
    height: 150px;
    width: 100%;
    max-width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
        img{
            width: 52px;
        }
        h1{
            font-weight: 400;
            font-size: 36px;
            color: ${rootColors.white};
            padding-left: 24px;
        }
`