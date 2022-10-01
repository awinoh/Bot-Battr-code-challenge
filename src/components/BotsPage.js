import React,{useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([])
  const [yourBots, setYourBots] = useState([])

  async function fetchBots(){
    await fetch(' http://localhost:8002/bots')
    .then((response) => response.json())
    .then((data) => setBots(data));
  }

  useEffect(() => {
    fetchBots()
  }, [])
  
  const action = (bot) => {
    if(!yourBots.includes(bot)){
      setYourBots([...yourBots,bot])
    } 
  }

  const removeBot = (bot) => {
    // console.log(bot)
    setYourBots(yourBots.filter(yourBot => yourBot.id !== bot.id))
  }
  function deleteBot(bot) {
    fetch('http://localhost:8002/bots/' + bot.id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        fetchBots();
        setYourBots(yourBots.filter((b) => b.id !== bot.id));
      });
    
  }
  return (
    <div>
     <YourBotArmy yourBots={yourBots} removeBot={removeBot} action={removeBot}/>
      <BotCollection bots={bots} action={action} deleteBot={deleteBot}/>
    </div>
  )
}

export default BotsPage;
