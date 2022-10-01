import React,{useState,useEffect} from "react";
import BotCard from "./BotCard";


function BotCollection() {
  const [bots,setBots] = useState([])

  async function fetchBots(){
    await fetch(' http://localhost:8002/bots')
    .then((response) => response.json())
    .then((data) => setBots(data));
  }

  useEffect(() => {
    fetchBots()
  
    
  }, [])
  

  return (
    <div className="ui four column grid">
      <div className="row">
      {bots && bots.map(bot =>
        <BotCard bot={bot}/>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
