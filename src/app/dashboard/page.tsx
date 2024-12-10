import Breakline from '@/common/components/elements/Breakline';
import { GITHUB_ACCOUNTS } from '@/common/constant/github';
import Contributions from './_components/Contributions';


const Dashboard = () => {
  return (
    <>
      <Breakline className='mb-8 mt-10' />
      <div className='space-y-10'>
        {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
          (account, index) => (
            <Contributions
              key={index}
              username={account?.username}
              type={account?.type}
              endpoint={account?.endpoint}
            />
          ),
        )}
      </div>
    </>
  );
};

export default Dashboard;
