import React, { FC, useState, useRef } from 'react';
import axios from 'axios';
import { validateUrl } from '../../utils/validateUrl';
import {
  Section,
  Wrapper,
  Form,
  SrLabel,
  Input,
  ErrorMsg,
  Button,
  Results,
  ListItem,
  OriginalLink,
  ShortenLink,
} from './style';

interface Link {
  original: string;
  shortened: string;
}

interface Error {
  isError: boolean | null;
  msg: string | null;
}

type Submit = React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const Shortener: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Link[]>([]);
  const [error, setError] = useState<Error>({ isError: null, msg: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError({ isError: null, msg: null });
    setQuery(e.target.value);
  };

  const copyToClipboard = (idx: number): void => {
    // find shorten link hash based on index
    const copiedLink = `https://rel.ink/${results[idx].shortened}`;
    navigator.clipboard.writeText(copiedLink);
  };

  const handleSubmit = async (event: Submit): Promise<void> => {
    event.preventDefault();
    // prevent submiting empty input
    if (!query) {
      setError({ isError: true, msg: 'Please add a link' });
    } else {
      // check if input string is correct url
      if (validateUrl(query)) {
        try {
          let response = await axios.post('https://rel.ink/api/links/', {
            url: query,
          });

          // display freshest results on top
          // limit results to 3
          if (results.length < 3) {
            setResults([{ original: query, shortened: response.data.hashid }, ...results]);
          } else {
            setResults([
              { original: query, shortened: response.data.hashid },
              results[0],
              results[1],
            ]);
          }

          // clear input after each api call
          setQuery('');
        } catch (error) {
          alert('Something went wrong...');
        }
      } else {
        // when input does not contain correct url
        setError({ isError: true, msg: 'Please add a valid link' });
      }

      return;
    }
  };

  return (
    <Section>
      <Wrapper>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <SrLabel htmlFor="inputLink">Paste a link to shorten it:</SrLabel>
          <div>
            <Input
              value={query}
              id="inputLink"
              name="inputLink"
              type="text"
              placeholder="Shorten a link here..."
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleChange(e)}
              error={error.isError}
              aria-invalid={error.isError ? 'true' : 'false'}
            />
            {error.isError && <ErrorMsg role="alert">{error.msg}</ErrorMsg>}
          </div>
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Shorten It!
          </Button>
        </Form>
        {results && (
          <Results>
            <SrLabel as="span">Shortened links</SrLabel>
            <ul>
              {results.map((result, idx) => (
                <ListItem key={idx}>
                  <OriginalLink href={result.original}>{result.original}</OriginalLink>
                  <ShortenLink href={`https://rel.ink/${result.shortened}`}>
                    https://rel.ink/{result.shortened}
                  </ShortenLink>
                  <button onClick={() => copyToClipboard(idx)}>Copy</button>
                </ListItem>
              ))}
            </ul>
          </Results>
        )}
      </Wrapper>
    </Section>
  );
};
