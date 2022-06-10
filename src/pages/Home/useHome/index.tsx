import { useEffect, useState } from 'react';

import { getPullRequests } from '@/services/github_service';

export interface UsePullRequestsI {}

export const usePullRequests = () => {
  const [pullRequestList, setPullRequestList] = useState<any[]>([]);

  const prs = async () => {
    const data = await getPullRequests({
      owner: 'AyendaHoteles',
      repo: 'ayenda',
      state: 'open',
      sort: 'created'
    });

    console.log(data);
    const mePullRequests = data.filter((item: any) => item.assignee?.login === 'jfvilladiego');

    setPullRequestList(mePullRequests);
  };

  useEffect(() => {
    prs();
  }, []);

  return { pullRequestList };
};
