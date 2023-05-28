import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
const ICON_SIZE = "35px";
const iconArr = [<FaRegThumbsUp size={ICON_SIZE} />, <MdPeople size={ICON_SIZE} />, <MdOutlineProductionQuantityLimits size={ICON_SIZE}/>, <GiTreeDoor size={ICON_SIZE}/>]
export const Statistics = ({title, stats}) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

<StatisticsList>
        {stats.map(({ id, title, total },index) => {
          return (<StatisticItem key={id} icon={iconArr[index] } title={title} total={total}  />  )
        })}
</StatisticsList>
    </>
  );
};
