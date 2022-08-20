import styled from 'styled-components'

export const Layout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`; 
export const ImageContainer = styled.div`
    flex: 1;
    z-index: 2;
    overflow: hidden;
    img {
        width: 100%;
        height: 45em;
        object-fit: cover;
        -webkit-user-drag: none;
    }
`;
export const Hide = styled.div`
    overflow: hidden;
`;