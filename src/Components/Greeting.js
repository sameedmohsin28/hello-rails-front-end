import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGreeting } from '../Redux/greeting/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const displayGreeting = useSelector((store) => (store.greeting.randomGreeting));

  return (
    <>
      <h1>This is a random greeting</h1>
      <div>{displayGreeting}</div>
    </>
  );
}

export default Greeting;
