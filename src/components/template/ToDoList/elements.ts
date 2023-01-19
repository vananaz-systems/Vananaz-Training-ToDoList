import styled from "styled-components";
import colors from "../../../constants/config/theme/colors";

//doc>
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1vh;
`
//doc<

//header>
export const ToDoListHeaderContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
     &.back {
        justify-content: flex-start;
     }
`
export const ToDoListHeaderText = styled.h1`
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 21px;
   font-color${colors.bluePrimary};
   color: ${colors.bluePrimary};
     &.back {
        color:${colors.black};
     }
`
//header<
//inputs>
export const ToDoListInputsContainer = styled.div`
width: 100%;
height: fit-content;
display: flex;
align-content: center;
align-items: center;
     &.hide{
      display: none;
     }
`
export const ToDoListInputButton = styled.div`
display: flex;
&.hide{
     display: none;
    }
`
//inputs<
//listcontent>
export const ToDoListListContent = styled.div`
width: 100%;
height: 100;
display: flex;
     &.hide{
      display: none;
     }
`
//<