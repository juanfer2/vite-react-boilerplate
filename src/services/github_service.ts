import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://api.github.com';

export const getPullRequests = async ({ owner, repo, state, sort }: any) => {
  const response: AxiosResponse = await axios.get(
    `${BASE_URL}/repos/${owner}/${repo}/pulls?state=${state}&sort=${sort}&per_page=100`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'token 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'
      }
    }
  );

  console.log(response);

  return response.data;
};
