import styled from "styled-components";

export const Container = styled.div`
scroll-snap-type:y mandatory;
max-height:100vh;
overflow-y:scroll;
padding-top:6rem;
`;

export const Content = styled.div`
scroll-snap-align:start;
text-align:center;
align-items:center;
justify-content:center;
display:flex;
height:100vh;
`;