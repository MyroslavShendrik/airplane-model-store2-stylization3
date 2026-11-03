import PropTypes from "prop-types";
//! Константи для розмірів іконок
import { iconSize } from '@/constants';

//! Бібліотека react-icons
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GiArmoredBoomerang, GiCeremonialMask, GiAirplaneDeparture, GiCommercialAirplane, GiCurlyMask } from "react-icons/gi";
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { FcTrademark } from "react-icons/fc";
//? nameBrief
//? nameFull - <FcTrademark /> - Повна назва
//? type - <GiArmoredBoomerang /> - бумеранг, <GiCommercialAirplane /> - літак- Тип
//? nickname - <GiCeremonialMask /> маска1, <GiCurlyMask /> маска2  - Прізвисько
//? country - <AiOutlineFlag /> - прапор, <CiGlobe /> - глобус - Країна виробник
//? year - <AiOutlineClockCircle /> - годинник - Рік випуску
//? duration - <TbClockHour4Filled /> - годинник - Тривалість виробництва(в роках)
//? price - <CiBadgeDollar/> - $, <AiOutlineDollarCircle /> - $ - Ціна
//? description - <AiOutlineInfoCircle /> - info - Опис
//? <GiAirplaneDeparture /> - Рекламна модель
//? <CiAirportSign1 /> - Реальна модель


import defaultImage from "./default.jpg";

// import { iconSize } from "@/constants";
import { getManufacturingYears } from "@/utils";

import {
  PlaneTitle,
  TextField,
  TextFieldValue,
  ImageTitles,
  ActualImageBox,
  ActualImage,
  PlaneButton,
} from "./PlaneItem.styled";

export default function PlaneItem({
  urlMain = defaultImage,
  urlPromotional,
  urlActual,
  nameBrief,
  nameFull,
  nickname = "не відомо",
  year,
  country,
  type,
  price,
  description,
  startData,
  endData,
}) {
  return (
    <>
      <PlaneTitle>{nameBrief}</PlaneTitle>

      <img src={urlMain} alt={nameBrief} />

      <TextField>
        <FcTrademark size={iconSize.md} /> Повна назва:{" "}
        <TextFieldValue>{nameFull}</TextFieldValue>
      </TextField>

      <TextField>
        <GiCommercialAirplane size={iconSize.md} /> Тип:{" "}
        <TextFieldValue>{type}</TextFieldValue>
      </TextField>

      <TextField>
        <GiCurlyMask  size={iconSize.md} /> Прізвисько:{" "}
        <TextFieldValue>{nickname}</TextFieldValue>
      </TextField>

      <TextField>
        <CiGlobe size={iconSize.md} /> Країна виробник:{" "}
        <TextFieldValue>{country}</TextFieldValue>
      </TextField>

      <TextField>
        <AiOutlineClockCircle size={iconSize.md} /> Рік випуску:{" "}
        <TextFieldValue>{year}</TextFieldValue>
      </TextField>

      <TextField>
        <TbClockHour4Filled size={iconSize.md} /> Тривалість виробництва (в роках):{" "}
        <TextFieldValue>
          {getManufacturingYears(startData, endData)}
        </TextFieldValue>
      </TextField>

      <TextField>
        <AiOutlineDollarCircle size={iconSize.md} /> Ціна:{" "}
        <TextFieldValue>{price}</TextFieldValue>
      </TextField>

      <TextField>
        <AiOutlineInfoCircle size={iconSize.md} /> Опис:{" "}
        <TextFieldValue>{description}</TextFieldValue>
      </TextField>

      <ImageTitles>
        <GiAirplaneDeparture size={iconSize.lg} /> Рекламна модель:
      </ImageTitles>
      <img src={urlPromotional} alt={nameBrief} />

      <ImageTitles>
        <CiAirportSign1 size={iconSize.lg} /> Реальна модель:
      </ImageTitles>
      <ActualImageBox>
        {urlActual.map((image, index) => (
          <ActualImage key={index} src={image} alt={nameBrief} />
        ))}
      </ActualImageBox>

      <br />
      <PlaneButton type="button">Додати до кошику</PlaneButton>
    </>
  );
}

PlaneItem.propTypes = {
  urlMain: PropTypes.string,
  urlPromotional: PropTypes.string.isRequired,
  urlActual: PropTypes.arrayOf(PropTypes.string).isRequired,
  nameBrief: PropTypes.string.isRequired,
  nameFull: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startData: PropTypes.string.isRequired,
  endData: PropTypes.string.isRequired,
};
