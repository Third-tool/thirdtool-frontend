import styled from 'styled-components';
import { Plus } from '@assets/icons/Plus';
import { CloseButton } from '@assets/icons/CloseButton';

const AddDeckModal = ({ value, onChange, onClose, onAdd }) => {
  return (
    <ModalOverlay>
      <ModalBox>
        <TopContainer>
          <AddDeckTitle>덱 추가</AddDeckTitle>
          <CloseButtonWrapper>
            <CloseButton onClick={onClose} />
          </CloseButtonWrapper>
        </TopContainer>

        <Input
          placeholder='추가할 덱의 제목을 입력하세요'
          value={value}
          onChange={onChange}
        />
        <ModalButtonWrapper>
          <AddDeckButton onClick={onAdd}>
            <Plus />덱 추가
          </AddDeckButton>
        </ModalButtonWrapper>
      </ModalBox>
    </ModalOverlay>
  );
};

export default AddDeckModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #1e1e1e;
  padding: 40px;
  border-radius: 16px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddDeckTitle = styled.div`
  font-size: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 80px;
  &::placeholder {
    color: #aaa;
    font-size: 18px;
  }
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddDeckButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 160px;
  height: 60px;
  font-size: 24px;
  border: none;
  border-radius: 20px;
  background-color: #cb0404;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

const CloseButtonWrapper = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
