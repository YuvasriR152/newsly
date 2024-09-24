

import WorldNews from "../assets/worldnews.webp";
import Country from "../assets/countrynews.png";
import Home from "../assets/homesec.jpg";
import News from "../assets/newbackg.avif";

export default function Hero(){
    return (
        <>
            <section className="w-full h-100">
                <img src={Home}></img>
            </section>
            <section className="w-full h-full flex flex-row m-3 gap-3">
            <div className="shadow-xl hover:bg-gray-400 box-content w-1/3 h-1/3">
            <img src={WorldNews} className=""></img>
            <h1>World News</h1>
            <p>U will Recieve all ur World News here...</p>
           </div>
           <div className="shadow-xl hover:bg-gray-400 box-content w-1/3 h-1/3">
            <img src={WorldNews} className=""></img>
            <h1>World News</h1>
            <p>U will Recieve all ur World News here...</p>
           </div>
           <div className="shadow-xl hover:bg-gray-400 box-content w-1/3 h-1/3">
            <img src={WorldNews} className=""></img>
            <h1>World News</h1>
            <p>U will Recieve all ur World News here...</p>
           </div>
           <div className="shadow-xl hover:bg-gray-400 box-content w-1/3 h-1/3">
            <img src={WorldNews} className=""></img>
            <h1>World News</h1>
            <p>U will Recieve all ur World News here...</p>
           </div>
           <div className="shadow-xl hover:bg-gray-400 box-content w-1/3 h-1/3">
            <img src={WorldNews} className=""></img>
            <h1>World News</h1>
            <p>U will Recieve all ur World News here...</p>
           </div>


            </section>
          
        </>
    );
};