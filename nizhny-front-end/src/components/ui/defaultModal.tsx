import { Modal } from '@mantine/core';

interface IModalProps {
  isOpened: boolean;
  close: () => void;
  children: React.ReactNode;
  size?: string;
}
const DefaultModal = ({ isOpened, close, children, size }: IModalProps) => {
  return (
    <>
      <Modal
        opened={isOpened}
        onClose={close}
        size={size}
        styles={{
          overlay: { background: 'none' },
        }}
      >
        {children}
      </Modal>
    </>
  );
};

export default DefaultModal;
