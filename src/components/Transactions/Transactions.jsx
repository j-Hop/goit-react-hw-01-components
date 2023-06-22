import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({items}) => {
    return (
  <table className={css.basic}>
   <thead className={css.head}>
    <tr className={css.title}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
   </thead>
 

  <tbody className={css.tableBody}>
    {items.map(item=>(
    <tr className={css.row} key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
    </tr>
    ))}
  </tbody>
     </table>
     );
};

Transactions.propTypes ={
    items : PropTypes.array,
};