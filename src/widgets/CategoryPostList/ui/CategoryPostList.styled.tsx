"use client";

import styled from "@emotion/styled";

export const Container = styled.div`
  width: 800px;
  margin: 0px auto;

  @media (max-width: 1400px) {
    width: calc(1050px + 2rem);
    margin: 0px auto;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    padding: 0rem 1rem;
  }
`;

export const StyledRelatedPostList = styled.div`
  max-width: 800px;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 800px;
  }

  @media (max-width: 1200px) {
    margin: 0px auto;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 28px;
  line-height: 36px;
`;
