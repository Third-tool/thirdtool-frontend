import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
const SelectProject = () => {
  const navigate = useNavigate();
  const goto3day = () => {
    navigate('/3day');
  };
  return (
    <Gap>
      <ProjectBox>
        <button onClick={goto3day} style={{ all: 'unset' }}>
          <ProjectType>3day Project</ProjectType>
          <Period>Review: 3일 후</Period>
        </button>
      </ProjectBox>
      <ProjectBox>
        <button style={{ all: 'unset' }}>
          <ProjectType>영구 프로젝트</ProjectType>
          <Period>마지막 실행: 5일 전</Period>
        </button>
      </ProjectBox>
      <RecentBox>
        <RecentTop>
          <RecentText>최근에 학습한 덱</RecentText>
        </RecentTop>
        <RecentBottom>
          <RecentType>3 Day Project</RecentType>
          <RecentText>18/30 카드 완료(60%)</RecentText>
        </RecentBottom>
      </RecentBox>
    </Gap>
  );
};

export default SelectProject;

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProjectBox = styled.div`
  width: 640px;
  height: 140px;
  border-radius: 25px;
  padding-left: 40px;
  background: #1e1e1e;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProjectType = styled.div`
  font-size: 36px;
  margin-bottom: 8px;
`;

const Period = styled.div`
  font-size: 24px;
  color: #7d7d7d;
`;

const RecentBox = styled.div`
  width: 640px;
  cursor: pointer;
  background-color: #1e1e1e;
  border-radius: 24px;
`;

const RecentTop = styled.div`
  height: 73px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #333;
`;

const RecentText = styled.div`
  font-size: 24px;
  font-weight: 400;
  padding-left: 50px;
`;

const RecentBottom = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
`;

const RecentType = styled.div`
  padding-left: 50px;
  font-size: 36px;
`;
