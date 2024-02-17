import React, { useEffect, useState } from 'react';
import { BudgetProps } from './BudgetView';
import { getData } from '../../api/APIs';
import { ServerBudget } from '../../api/ServerInterfaces';
import ExpenseView from './ExpenseView';
import { useAuth } from '../../auth/AuthContext';

const ExpenseContainer = () => {

  const { userToken } = useAuth();
  const [budgets, setBudgets] = useState<BudgetProps[]>([]);
  
  const getBudgets = async () => {
    try {
      const path = '/budget';
      const serverData = await getData<ServerBudget[]>(path, userToken);
      // 서버 데이터를 클라이언트의 데이터 구조로 변환
      const data = serverData.map((item) => ({
        id: item.id,
        userId: item.userId, 
        userName: item.userName,
        userColor: item.userColor,
        groupId: item.groupId,
        content: item.spendingName,
        price: item.spendings,
        category: item.category,
        subCategory: item.subCategory,
        date: item.createdAt.substring(0,10),
      }));
      setBudgets(data);
    } catch (error) {
        if (error instanceof TypeError) {
          // TypeError 타입의 에러 처리
          console.error('budgets TypeError:', error);
        } else if (error instanceof ReferenceError) {
          // ReferenceError 타입의 에러 처리
          console.error('budgets ReferenceError:', error);
        } else {
          // 다른 모든 에러 처리
          console.error('budgets Unknown Error:', error);
        }
    }
  };

  useEffect(() => {
    getBudgets();
  }, []);
  
  return (
      <ExpenseView budgets={budgets} getBudgets={getBudgets}/>
  );
}

export default ExpenseContainer;
