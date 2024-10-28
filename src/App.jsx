import { Data } from "./data";
import './index.css';

function Name({name}) {
  return <h2>{name}</h2>
}

export default function App() {
  return (
    <>
    <Name name = {"Zain Ikram"}/>
      {Data.map((data) => {
        return (
          <div key={data.id} className="boxes">
            <h1>{data.title}</h1>
            <p>{data.detail}</p>
            <p>The now {data.ispacked === true ? 'Available ✅' : 'Not Available ❌'}</p>
          </div>
        )
      })}

    </>
  );
}
