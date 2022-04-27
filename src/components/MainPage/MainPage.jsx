import HeaderWithGoBack from "../HeaderWithGoBack/HeaderWithGoBack";
import TransactionForm from "../TransactionForm/TransactionForm";
import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";

const MainPage = () => {
  return (
    <>
      <HeaderWithGoBack title={"Журнал видатків "} />
      <TransactionForm />
      <ButtonsToAnalitics />
    </>
  );
};

export default MainPage;
