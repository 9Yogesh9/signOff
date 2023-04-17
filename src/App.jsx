import "./styles.css";
import TiltScale from "./components/tiltScale/TiltScale";
import Tribute from "./components/tribute/Tribute";
import Footer from "./components/footer/Footer";

export default function App() {
  const leaders = [
    {
      name: "Daniela",
      comments:
        "The most cheerful person I have ever met as a leader. Blessed with humorous nature I enjoyed a lot working with you. Memories will always be cherished. I got to learn a lot from your visionary and strategic manner of dealing with things."
    },
    {
      name: "Bharath",
      comments:
        "Extremely thankful to give my career a direction that is driving it toward a bright future. Your helpful nature, being just a call away whenever needed have helped me much during my initial days."
    },
    {
      name: "Harshal",
      comments:
        "More than a leader you are a friend to me. Always being supportive, humble and assertive you have taught me to be calm even in toughest situations."
    },
    {
      name: "Shabnam",
      comments:
        "The person who made me stand strong during my tough days. Being empathetic and patient to listen makes a special place for you in heart. Thanks a lot for being a lighthouse for a lost comrade."
    },
    {
      name: "Manali",
      comments:
        "Words are not enough to thank you. You are the person who shaped me as a professional whatever I am today. Be it client communications, deadline management, or the tough talk with a client your communication skills has always inspired me to give my best."
    }
  ];

  const teammates = [
    {
      name: "Venkata",
      comments:
        "The Pillar : Yup ! you are a pillar which holds the strength to make anyone stand. The foundation you build is still making me stand strong and face any upcoming challenge be it a personal or professional. Thanks a TON !"
    },
    {
      name: "Gayathri S.",
      comments:
        "Starting with a Master always has its benefits. Holding a hand, and keeping my back made me confident to explore fearlessly. The bond we share, and the fun we had can't be defined in words."
    },
    {
      name: "Gayatri V.",
      comments:
        "You are a Team. Anything goes wrong, need even a small help you have always helped everyone without giving a second thought. Never met such a down to earth person. Got to learn a lot from you."
    },
    {
      name: "Chandra",
      comments:
        "You are courageous and technically sound. I have always been confident that if you are there, then the things will be getting done for sure."
    },
    {
      name: "Milan",
      comments:
        "The time we cherished in DC, the trips, and the projects will always be remembered. Your playful nature makes working alongside you seems a jest. Tons of Memories full of love."
    }
  ];

  return (
    <div className="App">
      <div className="container">
        <Tribute />
      </div>
      <h1 className="head_highlight">My Leaders</h1>
      <div className="tiles">
        {leaders.map((a) => {
          return <TiltScale key={a.name} details={a} />;
        })}
      </div>
      <h1 className="head_highlight">My Teammates cum Mentors</h1>
      <div className="tiles">
        {teammates.map((a) => {
          return <TiltScale key={a.name} details={a} />;
        })}
      </div>
      <Footer />
    </div>
  );
}