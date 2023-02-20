import React from 'react'

interface Sime {
    text: string,
    velicinaFonta: string,
    xyz: string,
    zzz: {a?: number}
  }

const UspijesniBotun = ({ text, velicinaFonta, xyz, zzz }: Sime) => {
  return (
    <button style={{backgroundColor:"green",color:"white",borderRadius:"8px", padding: "10px", fontSize: velicinaFonta}}>{zzz.a} {xyz ? 'Dobar dan svima' : text}</button>
  )
}

UspijesniBotun.defaultProps = {
    velicinaFonta: '',
    xyz: "",
    zzz: {}
 };

export default UspijesniBotun