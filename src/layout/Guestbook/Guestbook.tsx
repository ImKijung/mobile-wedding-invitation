import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { get, ref } from 'firebase/database';
import CommentForm from './CommentForm.tsx';
import { realtimeDb } from '../../firebase.ts';
import { Heading2 } from '@/components/Text.tsx';

interface GuestbookEntry {
  createdAt: number;
  date: string;
  message: string;
  sender: string;
}

const Guestbook = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const guestbookRef = ref(realtimeDb, 'guestbook');
      try {
        const snapshot = await get(guestbookRef);
        if (snapshot.exists()) {
          const data = snapshot.val() as Record<string, GuestbookEntry>; // 명시적으로 타입 지정
          const entriesArray = Object.keys(data).map((key) => ({
            createdAt: data[key].createdAt,
            date: data[key].date,
            message: data[key].message,
            sender: data[key].sender,
          }));
          setEntries(entriesArray);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching guestbook entries:', error);
      }
    };
    void fetchEntries();  // void 연산자를 사용하여 비동기 호출의 반환 값을 무시
  }, []);

  return (
    <GuestBookWrapper>
      <Heading2>
        메시지를 남겨주세요.
        <br />
        결혼식 하루 뒤, 신랑 신부에게 전달됩니다.
      </Heading2>
      <CommentForm />
      <EntryList>
        {entries.map((entry, index) => (
          <EntryItem key={index}>
            <strong>{entry.sender}</strong> ({entry.date}):
            <p>{entry.message}</p>
          </EntryItem>
        ))}
      </EntryList>
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;

const EntryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EntryItem = styled.li`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;