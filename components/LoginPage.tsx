import { Button } from '@nextui-org/react'
import React from 'react'
import Module from './Module';

const LoginPage = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
       <Button auto shadow onPress={handler}>
        Open modal
      </Button>

      <Module visible={visible} closeHandler={closeHandler}>
        <div className="">
          </div>
          </Module> 
    </div>
  )
}

export default LoginPage