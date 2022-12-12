import { Head, Row, Header } from './TableHead.styled';

export const TableHead = () => {
  return (
    <Head>
      <Row>
        <Header>TYPE</Header>
        <Header>AMOUNT</Header>
        <Header>CURRENCY</Header>
      </Row>
    </Head>
  );
};
