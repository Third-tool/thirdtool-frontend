import { styled } from 'styled-components';
const SelectProject = () => {
  return (
    <Gap>
      <ProjectBox>
        <div>
          <ProjectType>3day 프로젝트</ProjectType>
          <Period>Review:</Period>
        </div>
      </ProjectBox>
      <ProjectBox>
        <div>
          <ProjectType>영구 프로젝트</ProjectType>
          <Period>마지막 실행:</Period>
        </div>
      </ProjectBox>
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
  width: 760px;
  height: 180px;
  border-radius: 25px;
  background: #2f2f2f;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ProjectType = styled.div`
  font-size: 52px;
  margin-bottom: 8px;
`;

const Period = styled.div`
  font-size: 32px;
  text-align: center;
  color: #7d7d7d;
`;
