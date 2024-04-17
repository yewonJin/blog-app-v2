"use client";

import styled from "@emotion/styled";

export const StyledPostDetails = styled.div`
  width: 1380px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;

  @media (max-width: 1400px) {
    width: min-content;
    justify-content: start;
    padding: 0px 1rem;
    gap: 2rem;

    :first-of-type > nav:first-of-type {
      display: none;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 0.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--secondaryFill);

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 1rem;
  align-items: end;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  width: auto;
  font-size: 28px;
  line-height: 40px;
  font-weight: 600;
  margin: 0px;
`;

export const Category = styled.span`
  font-size: 16px;
  color: var(--tertiaryText);
  margin-bottom: 4px;

  &:hover {
    color: var(--secondaryText);
  }
`;

export const Date = styled.div`
  font-size: 16px;
  color: var(--tertiaryText);
  display: flex;
  align-items: end;
  margin-bottom: 4px;
`;

export const Nav = styled.nav`
  position: relative;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const IndexContainer = styled.div`
  position: fixed;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const IndexTitle = styled.h3``;

export const IndexFooter = styled.a`
  font-size: 16px;
  width: 100%;
  color: var(--tertiaryText);

  &:hover {
    cursor: pointer;
    color: var(--primaryText);
  }
`;
