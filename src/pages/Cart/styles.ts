import { styled } from 'styled-components'

export const CartContainer = styled.main`
  padding: 8rem 0;
`

export const FormWrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;

  h2 {
    font: ${(props) => props.theme.fonts['title-xs']};
    margin-bottom: 1rem;
  }
`

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  h4 {
    font: ${(props) => props.theme.fonts['title-s']};
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 2px;
  }

  p {
    font: ${(props) => props.theme.fonts['text-s']};
  }
`
