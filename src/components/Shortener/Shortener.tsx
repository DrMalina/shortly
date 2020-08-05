import React, { FC, useState } from 'react';
import axios from 'axios';
import { ShortenerResult } from '../ShortenerResult';
import { validateUrl } from '../../utils/';
import { Section, Wrapper, Form, SrLabel, Input, ErrorMsg, Button, Results } from './style';

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

          // limit results to 3
          if (results.length < 3) {
            setResults([
              { original: query, shortened: `https://rel.ink/${response.data.hashid}` },
              ...results,
            ]);
          } else {
            // display freshest results on top
            setResults([
              { original: query, shortened: `https://rel.ink/${response.data.hashid}` },
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
                <ShortenerResult key={result.shortened + idx} result={result} />
              ))}
            </ul>
          </Results>
        )}
      </Wrapper>
    </Section>
  );
};
