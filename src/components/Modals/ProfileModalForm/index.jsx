import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';

const  ProfileModalForm=({modalOpened,setModalOpened})=> {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      opened ={modalOpened}
      onClose={() => setModalOpened(false)}
      closeButtonLabel="Close authentication modal"
      closeOnClickOutside={true}
      closeOnEscape={true}
    >
      <form className="info-form">
          <h3>Profile Form</h3>
            <div>
                <input type="text" name="firstName" className="info-input" placeholder="First Name"/>
                <input type="text" name="lastName" className="info-input" placeholder="Last Name"/>
            </div>
            <div>
                <input type="text" name="work at" className="info-input" placeholder="Work At"/>
            </div>
            <div>
                <input type="text" name="livesIn" className="info-input" placeholder="Lives In"/>
                <input type="text" name="country" className="info-input" placeholder="Country"/>
            </div>
            <div>
                <input type="text" name="relationship" className="info-input" placeholder="Relationship Status"/>
            </div>
            <div>
                <strong><small>Profile Image:</small></strong>
                <input type="file" name="profileImage" className="info-input"/>
                <strong><small>Cover Image:</small></strong>
                <input type="file" name="coverImage" className="info-input"/>
            </div>
            <button className='button logout-btn'>Update profile</button>
      </form>
    </Modal>
  );
}

export default ProfileModalForm