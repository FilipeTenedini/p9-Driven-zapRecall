import styled from "styled-components";
import { rootColors } from "../../constants/colors";

export const ResultArea = styled.footer`
    width: 100%;
    max-width: 375px;
    height: ${({qt}) => qt < 8 ? "70px" : '' };
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: ${rootColors.white};

    p{
        color: ${rootColors.lightBlack};
        font-size: 18px;
        font-weight: 400;
    }
`
export const IconsArea = styled.div`
    width: 100%;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: ${({qt}) => qt < 1 ? 'none' : 'flex'};
        img {
            margin: 3px;
        }
`
export const Msg = styled.div`
    text-align: center;
    margin-top: 16px;
    margin-bottom: 14px;
`