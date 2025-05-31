import { useState } from 'react';

const AddDeck = () => {
  const [deckName, setDeckName] = useState('');

  const handleInputChange = (event) => {
    setDeckName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 덱 추가 로직을 구현합니다.
    console.log('덱 이름:', deckName);
    // 예: API 호출 등을 통해 덱을 추가할 수 있습니다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        덱 이름:
        <input type='text' value={deckName} onChange={handleInputChange} />
      </label>
      <button type='submit'>덱 추가</button>
    </form>
  );
};
