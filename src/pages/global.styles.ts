import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  style?: {
    fontFamily: string;
    fontWeight?: number | undefined;
    fontStyle?: string | undefined;
  };
}>`
  body {
    background-color: #fff;
    font-family: ${({ style }) => style?.fontFamily || "sans-serif"};
    font-style: ${({ style }) => style?.fontStyle || "normal"};
  }

  *,
  :after,
  :before,
  ::backdrop {
    margin: 0;
    box-sizing: border-box;
  }
`;
