import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0); //sets counter to start at 0
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<number[]>([]); //stores the values from button

  const handleAddOneToCounter = () => {
    queueRerenderWithNewCounterValue(previousCount => previousCount + 1);
  };

  const handleSubtractOneFromCounter = () => {
    queueRerenderWithNewCounterValue(previousCount => previousCount - 1);
  };

  const handleStoreCurrentCount = () => {
    queueRerenderWithNewStoredValues([
      ...storedValuesFromCurrentRender,
      counterValueFromCurrentRender,
    ]);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>Your stored numbers: {storedValuesFromCurrentRender.map()}</p>
      <p>Counter: {counterValueFromCurrentRender}</p>
      <button onClick={handleSubtractOneFromCounter}>-1</button>
      <button onClick={handleAddOneToCounter}>+1</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
