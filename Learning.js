import React from 'react';
import Page from 'tcomponents/molecules/pageComponent';
import st from './styles.module.scss';
import { ROUTES } from '../approvalManagement/constants/ApprovalManagement.general.constants';
import Heading from 'tcomponents/atoms/Heading';
import TabbedSections from 'tcomponents/molecules/tabbedSections';
import TableManager from 'tcomponents/organisms/TableManager';
const Learning = (props) => {
  return (
    <Page>
      <Page.Header hasBack goBackTo={ROUTES.CREATE_APPROVAL_REQUEST}>
      <Heading>{__('Approval Dashboard')}</Heading>
      </Page.Header>
      <Page.Body>
            <TableManager tableProps={}/>
      </Page.Body>
    </Page>
  );
};
export default Learning;

{
  /* <div className={st.container}>
<div className={st.header}>
    <h1 >
        Header
    </h1>
</div>
<div className={st.sidebar}>
    <div  >
        Hello Flex2
    </div>
    <div >
        Hello Flex3
    </div>
    <div >
        Hello Flex4
    </div>
    <div  >
        Hello Flex2
    </div>
    <div >
        Hello Flex3
    </div>
    <div >
        Hello Flex4
    </div>
</div>
</div> */
}
