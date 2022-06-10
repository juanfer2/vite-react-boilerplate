import { Button } from '@mui/material';

import Input from '@/components/Input';

/*
const Heading = styled('h1')`
  background-color: ${(props: any) => props.bg};
  color: ${(props: any) => props.fg};
`;
*/

function Home() {
  return (
    <div>
      <Input label="User" name="User" />

      <Button variant={'contained'} color={'primary'}>
        Click me
      </Button>

      <Button variant={'contained'} color={'secondary'}>
        Click me
      </Button>

      <Button variant={'contained'} color={'error'}>
        Click me
      </Button>
    </div>
  );
}

export default Home;
