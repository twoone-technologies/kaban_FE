import Container from '../../reusable/Container';
import styles from './index.module.css';
import Invite from './invite';
import AgentStat from './agentStat';
import AgentImg from './agentImg';
import Insights from './insights';
import Wallet from './wallet';
import Blog from './blog';

export default function Overview() {
  return (
    <Container element="section" className={`flex f-column ${styles.overview}`}>
      <Invite />
      <div className={`grid gap-2 ${styles.agentStat}`}>
        <AgentStat />
        <AgentImg />
        <Insights />
      </div>
      <div className={`flex gap-1 ${styles.walletBlog}`}>
        <Wallet />
        <Blog />
      </div>
    </Container>
  );
}
