import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({title,total, icon}) => {return (<StatisticBox>
    {icon}
  <StatisticCounter>{total }</StatisticCounter>
  <StatisticText>{title}</StatisticText>
  </StatisticBox>)

};
