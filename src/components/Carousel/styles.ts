import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const WrapperIndicator = styled.View`
  position: absolute;
  bottom: 34px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

interface ImageProps {
  width: number;
  height: number;
}

export const Image = styled.Image<ImageProps>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

export const Dot = styled.View<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#000" : "#ccc")};
  width: 10px;
  height: 10px;
  border-radius: 20px;
  border: 0.2px solid #fff;
  elevation: 1;
`;
