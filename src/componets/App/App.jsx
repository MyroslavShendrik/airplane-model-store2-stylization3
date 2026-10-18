import Section from '@/componets/Section/Section.jsx'; //! вбудовані стилі
import CardsList from '@/componets/cardList/CardList.jsx';  //! вбудовані стилі
import cards from '@/json/star-wars-shop.json';
//  import './App.css'

export default function App() {
  return (
    <>
      <Section title="Магазин по всесвіту Star Wars">
        <CardsList items={cards} />
      </Section >
    </>
  );
};
