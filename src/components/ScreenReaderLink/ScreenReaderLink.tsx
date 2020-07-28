import React, { FC } from 'react';
import { SrLink } from './style';

interface ScreenReaderLinkProps {
  skipTo: string;
  message: string;
}

export const ScreenReaderLink: FC<ScreenReaderLinkProps> = ({ skipTo, message }) => {
  return <SrLink href={`#${skipTo}`}>{message}</SrLink>;
};
