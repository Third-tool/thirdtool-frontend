export const threedaycardMockData = {
  success: true,
  data: [
    {
      cardId: 101,
      question: 'HashMap과 Hashtable의 차이는?',
      answer:
        'HashMap은 동기화를 지원하지 않고, Hashtable은 동기화를 지원합니다.',
      intervalDays: 3,
      isArchived: false,
      successCount: 2,
      reps: 3,
      easeFactor: 2500,
      lapses: 1,
    },
    {
      cardId: 102,
      question: 'TCP의 3-way handshake 과정은?',
      answer: 'SYN → SYN-ACK → ACK',
      intervalDays: 1,
      isArchived: false,
      successCount: 4,
      reps: 5,
      easeFactor: 2700,
      lapses: 0,
    },
    {
      cardId: 103,
      question: 'React 훅이란 무엇인가?',
      answer:
        '함수형 컴포넌트가 클래스형 컴포넌트의기능을 사용 할 수 있도록 해준다.',
      intervalDays: 3,
      isArchived: false,
      successCount: 2,
      reps: 3,
      easeFactor: 2500,
      lapses: 1,
    },
  ],
  message: null,
};

export const permanentMockData = {
  success: true,
  data: [
    {
      cardId: 301,
      question: 'JVM의 구성 요소는?',
      answer: '클래스 로더, 실행 엔진, 런타임 데이터 영역 등으로 구성됩니다.',
      intervalDays: 21,
      isArchived: true,
      successCount: 6,
      reps: 7,
      easeFactor: 2750,
      lapses: 0,
    },
    {
      cardId: 302,
      question: 'DNS Round Robin 방식이란?',
      answer: '여러 IP 주소를 번갈아 제공하여 부하를 분산하는 방식입니다.',
      intervalDays: 3,
      isArchived: true,
      successCount: 8,
      reps: 10,
      easeFactor: 2800,
      lapses: 1,
    },
  ],
  message: null,
};
