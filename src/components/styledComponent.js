import styled from "styled-components";
import theme from "../styles/theme.json";


export const Image = styled.img``;

export const Title = styled.h1`
    color: ${({color}) => theme.colors[color || 'dark']};
`;

export const Description = styled.p`
    color: ${({color}) => theme.colors[color || 'grey']};
`;