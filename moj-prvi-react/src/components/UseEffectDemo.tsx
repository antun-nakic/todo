import React, {useState,useEffect} from 'react'

type Props = {}

const UseEffectDemo = (props: Props) => {
    const [brojac, setBrojac] = useState(0);
    const [dupliBrojac, setDupliBrojac] = useState(0);

    useEffect(()=>{
        console.log(`Ja sam use effect koji se javlja bas svaki put nakon iscrtavanja`);
    })

    useEffect(()=>{
        console.log(`Bok ja sam use effect koji se javlja kada se promijeni stanjen 'brojac'`)
    }, [brojac])

    useEffect(()=>{
        console.log("Dobar dan ljudi");
    }, [])

    useEffect(()=>{
        console.log("Kad se ja javljam?");
    }, [brojac,dupliBrojac])

    /*
    useEffect(()=>{
        return ()=>{alert("čekaj skočimišu, di si krenija. Nema nigdi dok me ne potvrdiš. nema novog iscrtavanja!")}
    })
    */

    useEffect(()=>{
        console.log(`ZAMKA`);
        return ()=>{alert("Upao si u zamku!")}
    }, [dupliBrojac])

    useEffect(()=>{
        console.log(`Dorijan je kralj, neće se smesti ode!`);
        return (()=>{
            alert("Dobro si skužija!");
            setBrojac((U)=>U+1)
        })
    }, [brojac])

  return (
    <div>
        <h1>UseEffectDemo</h1>
        <p>Brojac: {brojac}</p>
        <button onClick={()=>setBrojac(brojac+1)}>Povecaj brojac</button>
        <hr/>
        <p>Dupli brojac: {dupliBrojac}</p>
        <button onClick={()=>setDupliBrojac(dupliBrojac+2)}>Povecaj dupli brojac</button>
    </div>
  )
}

export default UseEffectDemo