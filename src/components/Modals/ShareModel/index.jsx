import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../../PostSection/PostShare';

const  ShareModalForm=({modalOpened,setModalOpened})=> {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      opened ={modalOpened}
      onClose={() => setModalOpened(false)}
      closeOnClickOutside={false}
      closeOnEscape="true"
    >
        <PostShare />
    </Modal>
  );
}

export default ShareModalForm