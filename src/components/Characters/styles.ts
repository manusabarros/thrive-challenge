import { Status } from "@/types";
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
  border: 1px solid #e4e4e4;
  border-radius: calc(0.625rem + 4px);
  overflow: hidden;
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
`;

export const ImageContainer = styled.div`
  height: 300px;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const Badge = styled.div<{ $status: Status }>`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
  font-size: 0.875rem;
  padding: 0.125rem 0.5rem;
  border-radius: calc(0.625rem - 2px);
  color: ${({ $status }) => ($status === "unknown" ? "#000" : "#fff")};
  background-color: ${({ $status }) =>
    $status === "Alive"
      ? "#47a659"
      : $status === "Dead"
        ? "#db3036"
        : "#f5f5f5"};
`;

export const Info = styled.div`
  padding: 1rem;
`;

export const Name = styled.h3`
  margin-bottom: 0.5rem;
`;

export const Species = styled.p``;
