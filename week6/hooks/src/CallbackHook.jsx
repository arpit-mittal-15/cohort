import React, { memo, useCallback, useState } from 'react'

const CallbackHook = () => {

  const [count, setCount]= useState(0);

  const inputFn = useCallback(() => {
    console.log('hi there');
  }, []);                                 // ek baar mount hone k baad ye fir koi render me waps create ni hoga

  return (
    <div>
      <ButtonComponent inputFn={inputFn} />
      <button onClick={() => {
        setCount(count => count + 1);
      }}>Click Me {count}</button>
    </div>
  )
}

const ButtonComponent = memo(({ inputFn }) => { // kyuki ye memo k andr h aur inputFn kvi recreate ni ho rha to 
  console.log('child render');                  // ye v re render ni hoga
  
  return <div>
    <button>Button clicked</button>
  </div>
})

export default CallbackHook