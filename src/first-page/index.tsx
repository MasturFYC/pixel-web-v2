import React from 'react';
import { Flex } from '@adobe/react-spectrum';
import logo from '../logo.svg';

export function ShowFirstPage() {
  return (
    <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} maxWidth={640}>
      <img src={logo} className="App-logo" alt="logo" />
    </Flex>
  );
}
