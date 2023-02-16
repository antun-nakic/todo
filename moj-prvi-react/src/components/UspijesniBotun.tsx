import React from 'react'

interface IProps {
    text: string,
    velicinaFonta: string
  }

const UspijesniBotun = ({ text, velicinaFonta }: IProps) => {
  return (
    <button style={{backgroundColor:"green",color:"white",borderRadius:"8px", padding: "10px", fontSize: velicinaFonta}}>{text}</button>
  )
}

UspijesniBotun.defaultProps = {
    velicinaFonta: '',
 };

export default UspijesniBotun