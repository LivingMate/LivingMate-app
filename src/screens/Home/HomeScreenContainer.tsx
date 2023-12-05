// containers/HomeScreenContainer.tsx
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Post, Todo } from '../../../testData/HomeTest';
import { getInitialData, deleteTodo } from '../../API/HomeApiTest'; // 가상의 API 호출 및 데이터 로직을 수행하는 모듈
import HomeScreen from './HomeScreen';

interface HomeScreenContainerProps {}

const HomeScreenContainer: React.FC<HomeScreenContainerProps> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [noticePosts, setNoticePosts] = useState<Post[]>([]);
  const [otherPosts, setOtherPosts] = useState<Post[]>([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    // 데이터 초기화 로직을 외부 모듈로 이동
    getInitialData().then(({ initialTodos, initialNoticePosts, initialOtherPosts }) => {
      setTodos(initialTodos);
      setNoticePosts(initialNoticePosts);
      setOtherPosts(initialOtherPosts);
    });
  }, []);

  const handleDeleteTodo = (id: number) => {
    // 할 일 삭제 로직을 외부 모듈로 이동
    const updatedTodos = deleteTodo(todos, id);
    setTodos(updatedTodos);
  };

  const handleScroll = (event: any) => {
    setScrollPosition(event.nativeEvent.contentOffset.y);
  };

  return (
    <ScrollView onScroll={handleScroll}>
      <HomeScreen
        todos={todos}
        noticePosts={noticePosts}
        otherPosts={otherPosts}
        onDeleteTodo={handleDeleteTodo}
      />
    </ScrollView>
  );
};

export default HomeScreenContainer;