import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box";

import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png",
  },
  scissor: {
    name: "Scissor",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png",
  },
  paper: {
    name: "Paper",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [comResult, setComResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let comChoice = randomChoice();
    setComSelect(comChoice);
    let userJudge = judgement(choice[userChoice], comChoice);
    setUserResult(userJudge);
    setComResult(
      userJudge === "Tie" ? "Tie" : userJudge === "Win" ? "Lose" : "Win"
    );
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, com) => {
    if (user.name === com.name) {
      return "Tie";
    } else if (user.name === "Rock") {
      return com.name === "Paper" ? "Lose" : "Win";
    } else if (user.name === "Scissor") {
      return com.name === "Paper" ? "Win" : "Lose";
    } else if (user.name === "Paper") {
      return com.name === "Rock" ? "Win" : "Lose";
    }
  };

  return (
    <div>
      <h2 className="text">가위 바위 보 게임을 해보자!</h2>
      <div className="main">
        <Box name="You" item={userSelect} result={userResult} />
        <Box name="Computer" item={comSelect} result={comResult} />
      </div>
      <div className="main">
        <button className="button" onClick={() => play("scissor")}>
          가위
        </button>
        <button className="button" onClick={() => play("rock")}>
          바위
        </button>
        <button className="button" onClick={() => play("paper")}>
          보
        </button>
      </div>
    </div>
  );
}
export default App;
