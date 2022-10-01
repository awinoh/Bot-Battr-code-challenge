import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({yourBots, removeBot}) {

const deleteBot = (bot)=>{
  removeBot(bot)
}
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {yourBots && yourBots.map(bot => <BotCard key={bot.id}  bot={bot} action={deleteBot} />)}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
