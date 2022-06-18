import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';

const  ProfileModalForm=({modalOpened,setModalOpened})=> {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened ={modalOpened}
      onClose={() => setModalOpened(false)}
      title="Welcome"
      closeButtonLabel="Close authentication modal"
      closeOnClickOutside="true"
      closeOnEscape="true"
    >
      {/* Modal content */}
      <div className="form-info">
          <h2>Profile Form</h2>
      </div>
    </Modal>
  );
}

export default ProfileModalForm