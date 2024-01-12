import Modal from '~/components/reusable/modal/Modal';
import styles from './invite.module.css'

export default function Invite({
  isOpen,
  exit,
}: {
  isOpen: boolean;
  exit: () => void;
}) {
  return (
    <Modal isVisible={isOpen} closeModal={exit}>
      <div className={`flex f-column gap ${styles.invite}`}>
        <h2>Invite a Realtor</h2>
        <span>
          Use your referral link to help us grow the community, build your
          professional network and unlock rewards with the more people you
          invite.
        </span>

        <div className={`flex pad-block-0 pad-inline-1 s-btw b-radius ${styles.referal}`}>
          <span>referal link</span>
          <span>copy</span>
        </div>

        <div className={`b-radius ${styles.invite_grp}`}>
          <div className="flex pad-block-0 pad-inline-1 s-btw">
            <span>3 invites</span>
            <span>Get rewarded 5kbt</span>
          </div>
          <div className="flex pad-block-0 pad-inline-1 s-btw">
            <span>5 invites</span>
            <span>Get rewarded 10kbt</span>
          </div>
          <div className="flex pad-block-0 pad-inline-1 s-btw">
            <span>10 invites</span>
            <span>Get rewarded 15kbt</span>
          </div>
          <div className="flex pad-block-0 pad-inline-1 s-btw">
            <span>20 invites</span>
            <span>Get rewarded 40kbt</span>
          </div>
        </div>
      </div>
    </Modal>
  );
}
