import React from 'react';
import InstallmentListItem from '../../molecules/InstallmentLIstItem';

const installments = [
  {
    value: 500,
    formatedValue: 'R$ 500,00',
    payd: false,
    dueDate: '01/04/12',
  },
  {
    value: 500,
    formatedValue: 'R$ 500,00',
    payd: false,
    dueDate: '01/05/12',
  },
  {
    value: 500,
    formatedValue: 'R$ 500,00',
    payd: false,
    dueDate: '01/06/12',
  },
  {
    value: 500,
    formatedValue: 'R$ 500,00',
    payd: false,
    dueDate: '01/07/12',
  },
  {
    value: 500,
    formatedValue: 'R$ 500,00',
    payd: false,
    dueDate: '01/08/12',
  },
  {
    value: 500,
    formatedValue: 'R$ 500,00',
    payd: false,
    dueDate: '01/09/12',
  },
  {
    value: 500,
    formatedValue: 'R$ 500,00',
    payd: false,
    dueDate: '01/10/12',
  },
];

const InstallmentList = () => {
  return (
    <ul>
      {installments.map((installment, key) => {
        return (
          <InstallmentListItem
            key={key}
            value={installment.value}
            date={installment.dueDate}
          />
        );
      })}
    </ul>
  );
};
export default InstallmentList;
