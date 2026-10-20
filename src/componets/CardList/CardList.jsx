import CardItem from "@/componets/CardItem/CardItem.jsx"; //! без стилізації
import {setBgColor} from "@/utils"
import css from './CardList.module.css'


export default function CardList({ items }) {
  console.log("items:", items);
  return (
    <ul
      // style={{
      //   marginLeft: 10,
      //   marginRight: 10,
      //   padding: 10,
      //   display: "grid",
      //   gridTemplateColumns: "repeat(auto-fit, minmax(445px, 1fr))",
      //   gap: 32,
      //   outline: "1px solid red",
      // }}
      className={css.list}
    >
      {items.map((item) => (
        <li
          // style={{
          //   display: "grid",
          //   gap: 12,
          //   padding: 10,
          //   // backgroundColor: '#ffdb92', // "year" до 1946
          //   // backgroundColor: '#d2fdbd', // "year"  1946 - 1999
          //   // backgroundColor: '#d6f1ff', // "year" від 2000
          //   // backgroundColor: getBgColorBuiltInStyles(item.info.year),

          //   outline: "1px solid grey",
          // }}
          // className={css.item}
          className={css[setBgColor(item.age)]}

          key={item.id}
        >
<CardItem
  name={item.name}
  imageReal={item.image.real}
  imageAdditional={item.image.additional}
  imageToy={item.image.toy}
  category={item.category}
  productType={item.productType}
  age={item.age}
  gender={item.gender}
  showMovie={item.showMovie}
  character={item.character}
  year={item.year}
  price={item.price}
  discription={item.discription}
  interestingInfo={item.interestingInfo}
  features={item.features}
  wikipedia={item.wikipedia}
/>
        </li>
      ))}
    </ul>
  );
}
