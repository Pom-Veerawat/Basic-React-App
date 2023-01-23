import { useReducer } from 'react';

import DataContext from './data-context';

const defaultDataState = {
  items: [],
  totalAmount: 0
};

const dataReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    //const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: 0
    };
  }
  return defaultDataState;
};

const DataProvider = (props) => {
  const [dataState, dispatchDataAction] = useReducer(dataReducer, defaultDataState);

  const addItemToDataHandler = (item) => {
    dispatchDataAction({type: 'ADD', item: item});
  };

  const removeItemFromDataHandler = (id) => {
    dispatchDataAction({type: 'REMOVE', id: id});
  };

  const dataContext = {
    items: dataState.items,
    totalAmount: dataState.totalAmount,
    addItem: addItemToDataHandler,
    removeItem: removeItemFromDataHandler,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;