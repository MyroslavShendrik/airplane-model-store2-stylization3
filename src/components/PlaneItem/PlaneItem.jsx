import PropTypes from "prop-types";
import defaultImage from "./default.jpg";

import { iconSize } from "@/constants";
import { getManufacturingYears } from "@/utils";

import {
  PlaneTitle,
  TextField,
  TextFieldValue,
  ImageTitles,
  ActualImageBox,
  ActualImage,
  PlaneButton,
  TrademarkIcon,
  AirplaneIcon,
  MaskIcon,
  FlagIcon,
  YearIcon,
  DurationIcon,
  PriceIcon,
  InfoIcon,
  PromoIcon,
  RealIcon,
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
        <TrademarkIcon size={iconSize.md} /> Повна назва:{" "}
        <TextFieldValue>{nameFull}</TextFieldValue>
      </TextField>

      <TextField>
        <AirplaneIcon size={iconSize.md} /> Тип:{" "}
        <TextFieldValue>{type}</TextFieldValue>
      </TextField>

      <TextField>
        <MaskIcon size={iconSize.md} /> Прізвисько:{" "}
        <TextFieldValue>{nickname}</TextFieldValue>
      </TextField>

      <TextField>
        <FlagIcon size={iconSize.md} /> Країна виробник:{" "}
        <TextFieldValue>{country}</TextFieldValue>
      </TextField>

      <TextField>
        <YearIcon size={iconSize.md} /> Рік випуску:{" "}
        <TextFieldValue>{year}</TextFieldValue>
      </TextField>

      <TextField>
        <DurationIcon size={iconSize.md} /> Тривалість виробництва (в роках):{" "}
        <TextFieldValue>{getManufacturingYears(startData, endData)}</TextFieldValue>
      </TextField>

      <TextField>
        <PriceIcon size={iconSize.md} /> Ціна:{" "}
        <TextFieldValue>{price}</TextFieldValue>
      </TextField>

      <TextField>
        <InfoIcon size={iconSize.md} /> Опис:{" "}
        <TextFieldValue>{description}</TextFieldValue>
      </TextField>

      <ImageTitles>
        <PromoIcon size={iconSize.lg} /> Рекламна модель:
      </ImageTitles>
      <img src={urlPromotional} alt={nameBrief} />

      <ImageTitles>
        <RealIcon size={iconSize.lg} /> Реальна модель:
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