import { styled } from 'styled-components'

export const CardCoffeeContainer = styled.article`
  max-width: 16rem;

  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px;
  padding: 1.25rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: -2.25rem 0 0.75rem 0;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;

  margin-bottom: 1rem;
`

export const Tag = styled.span`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  font: ${(props) => props.theme.fonts['tag-text']};
  text-transform: uppercase;

  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const Description = styled.div`
  text-align: center;

  h4 {
    font: ${(props) => props.theme.fonts['title-s']};
    color: ${(props) => props.theme.colors['base-title']};
    margin-bottom: 0.75rem;
  }

  p {
    font: ${(props) => props.theme.fonts['text-s']};
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const Buy = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
`

export const Price = styled.span`
  strong {
    font: ${(props) => props.theme.fonts['title-m']};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;

  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
    border: none;
    border-radius: 2px;

    display: flex;
    align-items: center;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  transition: 0.5s;
  cursor: pointer;

  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
  }
`
