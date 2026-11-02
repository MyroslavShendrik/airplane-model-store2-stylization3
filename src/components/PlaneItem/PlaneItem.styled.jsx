import styled from "@emotion/styled";
import { FcTrademark } from "react-icons/fc";
import {
  GiCommercialAirplane,
  GiCeremonialMask,
  GiAirplaneDeparture,
} from "react-icons/gi";
import {
  AiOutlineFlag,
  AiOutlineClockCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { TbClockHour4Filled } from "react-icons/tb";
import { CiBadgeDollar, CiAirportSign1 } from "react-icons/ci";

export const PlaneTitle = styled.h3`
  margin-bottom: 12px;
  padding: 12px 16px;
  font-size: 32px;
  text-align: center;
  border-radius: 8px;
  background-color: yellow;
  color: blue;
`;

export const TextField = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const TextFieldValue = styled.span`
  font-weight: 400;
  font-style: italic;
`;

export const ImageTitles = styled.p`
  text-align: center;
  color: blue;
`;

export const ActualImageBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 8px;
  border-radius: 8px;
  background-color: gray;
`;

export const ActualImage = styled.img`
  max-width: calc((100% - 10px) / 2);
  border-radius: 14px;
`;

export const PlaneButton = styled.button`
  width: 70%;
  margin: 20px auto;
  padding: 16px 32px;
  display: inline-block;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow";
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  background-color: #008080;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2),
    4px 4px 8px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 16px 8px rgba(0, 0, 0, 0.3),
    0 8px 16px rgba(0, 0, 0, 0.9);
`;

const iconBase = `
  margin-bottom: -8px;
  color: #9b25fc;
`;

export const TrademarkIcon = styled(FcTrademark)`${iconBase}`;
export const AirplaneIcon = styled(GiCommercialAirplane)`${iconBase}`;
export const MaskIcon = styled(GiCeremonialMask)`${iconBase}`;
export const FlagIcon = styled(AiOutlineFlag)`${iconBase}`;
export const YearIcon = styled(AiOutlineClockCircle)`${iconBase}`;
export const DurationIcon = styled(TbClockHour4Filled)`${iconBase}`;
export const PriceIcon = styled(CiBadgeDollar)`${iconBase}`;
export const InfoIcon = styled(AiOutlineInfoCircle)`${iconBase}`;

export const PromoIcon = styled(GiAirplaneDeparture)`
  ${iconBase}
  color: blue;
`;
export const RealIcon = styled(CiAirportSign1)`
  ${iconBase}
  color: blue;
`;