import { Modal } from '@mantine/core';

interface IModalProps {
  isOpened: boolean;
  close: () => void;
  children: React.ReactNode;
}
const DefaultModal = ({ isOpened, close, children }: IModalProps) => {
  return (
    <>
      <Modal opened={isOpened} onClose={close}>
        {children}
      </Modal>
    </>
  );
};

export default DefaultModal;
