import styles from './micellenous.module.css';
import ItemInfo from '../itemInfo/ItemInfo';

export default function Text() {
  return (
    <div>
      <ItemInfo
        className={styles.safety_tips}
        h1={'Kaban Safety Tips'}
        children={
          <div className="flex f-column gap">
            <p>
              1. Do not make any upfront payment, such as inspection fees,
              before physically seeing the property or meeting the agent you
              contacted.
            </p>
            <p>
              2. Conduct thorough research to determine the correct recipient of
              rent and other fees associated with the property.
            </p>
            <p>
              3. All meetings with agents should be done in open & public
              locations.
            </p>
            <p>
              4. This property agent is NOT a representative from Kaban.ng
              neither does Kaban.ng control the affairs of the agent as both
              parties are different entities.
            </p>
            <p>
              5. It is our advise you deal with verified or high-rated realtors
            </p>
            <p>
              6. If you encounter any suspicious activities or believe you have
              come across a fraudulent listing or agent, report this immediately
              on the agent's page on our platform.
            </p>
          </div>
        }
      />
      <ItemInfo
        h1={'Disclaimer'}
        className={styles.disclaimer}
        children={
          <span>
            Please be aware that Kaban.ng is a property advertising platform and
            is not involved in the actual sale of listed properties. We do not
            provide warranties or guarantee the accuracy of property
            descriptions. Prospective buyers and tenants should contact listing
            agents for detailed information, and we encourage customers to
            review and rate the realtors on our platform. Kaban.ng is not
            responsible for the actions of agents, but we advise them to
            maintain positive customer relationships.
          </span>
        }
      />
    </div>
  );
}
