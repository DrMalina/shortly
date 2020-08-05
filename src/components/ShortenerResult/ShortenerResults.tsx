import React, { FC, useState, useEffect } from 'react';
import { copyToClipboard } from '../../utils';
import { ListItem, OriginalLink, ShortenLink, Button } from './style';

interface ShortenerResultProps {
  result: {
    original: string;
    shortened: string;
  };
}

export const ShortenerResult: FC<ShortenerResultProps> = ({ result }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isCopied)
      setTimeout(function () {
        setIsCopied(false);
      }, 2500);
  }, [isCopied]);

  const handleCopy = (link: string): void => {
    setIsCopied(true);
    copyToClipboard(link);
  };

  return (
    <ListItem>
      <OriginalLink href={result.original}>{result.original}</OriginalLink>
      <ShortenLink href={result.shortened}>{result.shortened}</ShortenLink>
      <Button onClick={() => handleCopy(result.shortened)} copied={isCopied}>
        {isCopied ? 'Copied!' : 'Copy'}
      </Button>
    </ListItem>
  );
};
