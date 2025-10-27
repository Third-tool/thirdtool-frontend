export const threedayDeckData = {
  success: true,
  data: [
    {
      deckId: 1,
      name: '리액트',
      isFrozen: false,
      isRoot: true,
      hasChildren: true,
      recentDay: 2,
    },
    {
      deckId: 2,
      name: '운영체제',
      isFrozen: true,
      isRoot: true,
      hasChildren: false,
      recentDay: 1,
    },
  ],
  message: null,
};

export const permanentDeckData = {
  success: true,
  data: [
    {
      deckId: 1,
      name: '자료구조',
      isFrozen: false,
      isRoot: true,
      hasChildren: true,
      recentDay: 1,
    },
    {
      deckId: 2,
      name: '운영체제',
      isFrozen: true,
      isRoot: true,
      hasChildren: false,
      recentDay: 1,
    },
    {
      deckId: 3,
      name: '소프트웨어공학',
      isFrozen: false,
      isRoot: true,
      hasChildren: true,
      recentDay: 2,
    },
  ],
  message: null,
};

export const threedaycardMockData = {
  success: true,
  data: [
    {
      cardId: 101,
      question: 'React 훅이란 무엇인가?',
      answer:
        '함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용 할 수 있도록 해준다.',
      intervalDays: 3,
      due: '3day',
      isArchived: false,
      successCount: 2,
      reps: 3,
      easeFactor: 2500,
      lapses: 1,
    },
    {
      cardId: 102,
      question:
        'React에서 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법은 무엇인가요?',
      answer: 'props',
      intervalDays: 3,
      due: '3day',
      isArchived: false,
      successCount: 2,
      reps: 3,
      easeFactor: 2500,
      lapses: 1,
    },
    {
      cardId: 103,
      question:
        'React에서 렌더링 성능 최적화를 위해 사용하는 React.memo와 useMemo, useCallback의 차이와 용도는?',
      answer:
        'React.memo는 컴포넌트 자체를 메모이제이션하여 props가 바뀌지 않으면 리렌더링을 방지. useMemo는 연산 결과를 메모이제이션하고, useCallback은 함수를 메모이제이션하여 하위 컴포넌트에 불필요한 props 변경을 막는다.',
      intervalDays: 3,
      due: '3day',
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
    {
      cardId: 303,
      question: 'HashMap과 Hashtable의 차이는?',
      answer:
        'HashMap은 동기화를 지원하지 않고, Hashtable은 동기화를 지원합니다.',
      intervalDays: 3,
      due: '3day',
      isArchived: false,
      successCount: 2,
      reps: 3,
      easeFactor: 2500,
      lapses: 1,
    },
    {
      cardId: 304,
      question: 'TCP의 3-way handshake 과정은?',
      answer: 'SYN → SYN-ACK → ACK',
      intervalDays: 1,
      isArchived: false,
      successCount: 4,
      reps: 5,
      easeFactor: 2700,
      lapses: 0,
    },
  ],
  message: null,
};
