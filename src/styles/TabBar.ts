import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3px;
  margin-bottom: 2rem;
  display: flex;
  max-width: 28rem;
  border-radius: 0.625rem;
  background-color: #f5f5f5;
`;

export const Tab = styled.button<{ $isActive?: boolean }>`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 0.875rem;
  transition: background-color 0.3s;
  border-radius: calc(0.625rem - 2px);
  ${({ $isActive }) =>
    $isActive
      ? `
          background-color: #fff;
          border: 1px solid #fff;
          box-shadow:
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
        `
      : `
          background-color: transparent;
          border: 1px solid #f5f5f5;
        `};
`;
