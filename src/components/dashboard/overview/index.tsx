import { Wrapper } from '../../reusable/Container';
import styles from './index.module.css';
import AgentStat from './agentStat';
import AgentImg from './agentImg';
import Insights from './insights';
import Wallet from './wallet';
import Blog from './blog';
import Refer from './refer';

export default function Overview() {
  return (
    <Wrapper element="section" className={`flex f-column ${styles.overview}`}>
      <Refer />
      <div className={`grid gap-2 ${styles.agentStat}`}>
        <AgentStat />
        <AgentImg />
        <Insights />
      </div>
      <div className={`flex gap-1 ${styles.walletBlog}`}>
        <Wallet />
        <Blog />
      </div>
    </Wrapper>
  );
}
