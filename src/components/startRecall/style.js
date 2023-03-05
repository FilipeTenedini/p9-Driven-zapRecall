import styled from 'styled-components';
import { rootColors } from '../../constants/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 25%;
    img{
        width: 136px;
        height: 161px;
        margin-bottom: 13px;
    }
    p{
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        color: ${rootColors.white};
        margin-bottom: 13px;
    }
    button{
        width: 246px;
        height: 54px;
        background: ${rootColors.white};
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        color: ${rootColors.red};
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin-bottom: 13px;
        cursor: pointer;
    }
`