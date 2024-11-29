import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CommentForm from './CommentForm.tsx';
import myDb from './guestbook.json';
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
    // JSON 데이터에서 Guestbook Entries를 불러오는 함수
    const fetchEntries = async () => {
      try {
        const data = myDb as Record<string, GuestbookEntry>; // JSON 데이터를 타입으로 지정
        const entriesArray = Object.keys(data).map((key) => ({
          createdAt: data[key].createdAt,
          date: data[key].date,
          message: data[key].message,
          sender: data[key].sender,
        }));
        setEntries(entriesArray);
      } catch (error) {
        console.error('Error processing guestbook entries:', error);
      }
    };
    void fetchEntries(); // 비동기 함수 호출
  }, []);

  return (
    <GuestBookWrapper>
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