import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import { questions } from "./questions";

function App() {
  const [quests] = useState(questions);
  return (
    <div className="p-5 bg-white rounded-2xl w-[400px] md:flex md:w-[700px] lg:w-[992px]">
      <article className="flex-1 md:mr-12">
        <picture className="block m-auto">
          <source media="(min-width: 768px)" srcset=".\images\illustration-woman-online-desktop.svg" alt="desktop-illustration" />
          <img src=".\images\illustration-woman-online-mobile.svg" alt="mobile-illustration" />
        </picture>
      </article>

      <article className="   mb-5 flex-1">
        <h1 className="font-kumbh-sans font-bold text-3xl text-center text-very-dark-desaturated-blue mt-5 mx-0 mb-7 md:text-left">FAQ</h1>
        {/* loop questions satu" */}
        {quests.map((quest) => (
          <Question key={quest.id} question={quest.question} answer={quest.answer} />
        ))}
      </article>
    </div>
  );
}

export default App;
