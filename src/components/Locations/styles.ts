import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 30rem) {
    max-width: 48rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 64rem) {
    max-width: 80rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 96rem) {
    max-width: 120rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1.5rem;
  border: 1px solid #e4e4e4;
  border-radius: calc(0.625rem + 4px);
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
`;

export const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div``;

export const Name = styled.h4`
  margin-bottom: 0.5rem;
`;

export const Type = styled.p`
  width: fit-content;
  font-size: 0.825rem;
  padding: 0.125rem 0.5rem;
  background-color: #f5f5f5;
  border-radius: calc(0.625rem - 2px);
`;
