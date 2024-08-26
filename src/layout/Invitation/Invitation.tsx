import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      <RoundButton
        target="_blank"
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=기정+선아+결혼식&dates=20241102T070000Z/20241102T110000Z&details=우리+결혼식에+참석해주세요!%0A장소:+충북+청주시+청원군+내수읍+학평길+14+청주+예궁%0A시간:+16:00&location=충북+청주시+청원군+내수읍+학평길+14+청주+예궁,+South+Korea"
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
