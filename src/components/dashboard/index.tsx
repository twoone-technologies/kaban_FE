import Container from '../reusable/Container';
import styles from './index.module.css';
import Invite from './reusables/invite';
import AgentStat from './reusables/agentStat';
import AgentImg from './reusables/agentImg';
import Insights from './reusables/insights';
import Wallet from './reusables/wallet';
import Blog from './reusables/blog';

export default function Dashboard() {
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
