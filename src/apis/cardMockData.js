export const cardMockData = {
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
  ],
  message: null,
};
