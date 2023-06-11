import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatFullDate } from '../../utils/dateFormatter'
export const CryptoHistory = ({items}) => {
  return (
  
  <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
   { items.map(({id, price, amount, date}, index) => {
      return(
        <Tr key={id}>
      <Td>{index+1}</Td>
      <Td>{price}</Td>
      <Td>{amount}</Td>
      <Td>{formatFullDate(date)}</Td>
    </Tr>
      )

   })
    
   }
  </tbody>
</BaseTable>)
};
