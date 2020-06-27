import React from 'react';
import {
  BlockFooter,
  BlockTitle,
  Popup,
  Page,
  Navbar,
  Link,
  List,
  ListItem,
  ListButton,
} from 'framework7-react';

import './Account.less';

const Account = () => {
  return (
    <Popup push swipeToClose="to-bottom" className="account-popup">
      <Page className="account-page">
        <Navbar title="Account">
          <Link popupClose slot="right">Done</Link>
        </Navbar>
        <List>
          <ListButton>Redeem Gift Card or Code</ListButton>
          <ListButton>Add Funds to Apple ID</ListButton>
          <ListButton>Manage Subscription</ListButton>
          <ListButton>Upgrade to Family Plan</ListButton>
        </List>
        <List>
          <ListButton>See what friends are listening to</ListButton>
        </List>
        <BlockFooter>
          <p>Set up your profile to share your music and see what your friends are playing.</p>
        </BlockFooter>
        <List>
          <ListItem
            title="Notifications"
            link
          />
        </List>
        <BlockTitle>
          <p>APPS WITH ACCESS</p>
        </BlockTitle>
        <List>
          <ListItem>Apple Music and TV Web Player</ListItem>
        </List>
      </Page>
    </Popup>
  );
};

export default Account;
