import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import Category from "../components/common/Category";
import Footer from "../components/common/Footer";
import Logo from "../components/common/Chill";

const Home = () => {
  const continueWatching = [
    { title: "Don't Look Up", image: "src/assets/poster/image 233.png" },
    { title: "Blue Lock", image: "src/assets/image 219.png" },
    { title: "Avatar: The Way of Water", image: "src/assets/image 217.png" },
    { title: "Suzume", image: "src/assets/image 228.png" },
    { title: "Fast X", image: "src/assets/Type=4.png" },
    { title: "Rio", image: "src/assets/image 208.png" }

  ];

  const topRated = [
    { title: "Antman", image: "/src/assets/poster/antman.jpg" },
    { title: "Oppenheimer", image: "src/assets/poster/opeenheiii.jpeg" },
    { title: "Game of Thrones", image: "src/assets/poster/gameofthornes.jpg" },
    { title: "Peaky Blinders", image: "src/assets/poster/peakyblinderas.jpg" },
    { title: "Interstellar", image: "src/assets/poster/interstellarrr1.jpeg" },
    { title: "Infinity War", image: "src/assets/poster/infinitewar.jpg" },
    { title: "Thor Ragnarok", image: "src/assets/poster/ragnarok.jpg" },
  ];

  const trendingMovies = [
    { title: "The Dark Knight", image: "src/assets/poster/darkknight.jpg", isTop10: true },
    { title: "Avengers: Endgame", image: "src/assets/poster/endgame.webp", isTop10: true },
    { title: "The Godfather", image: "src/assets/poster/thegodfatherrr.jpeg", isTop10: true },
    { title: "Shawshank Redemption", image: "src/assets/poster/theshawshankredemptionnn.jpeg", isTop10: true},
    { title: "No Way Home", image: "src/assets/poster/nowayhome.webp", isTop10: true },
    { title: "Interstellar", image: "src/assets/poster/interstellarrr1.jpeg", isTop10: true },
    { title: "Guardians of the Galaxy", image: "src/assets/poster/gotg.jpg", isTop10: true },
    { title: "Love & thunder", image: "src/assets/poster/love&thunder.jpg", isTop10: true },
  
  ];

  const newReleases = [
    { title: "No Way Home", image: "src/assets/poster/nowayhome.webp" },
    { title: "Thunderbolts", image: "src/assets/poster/thunderbolts.webpp" },
  ];
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
     
   <div className="flex items-center justify-between">
    <Logo src="src/assets/Logo (1).png" className="mb-4 ml-10 mt-2 pt-5 w-60 h-30" />
    </div>
    
      <Hero />
      <Category title="Melanjutkan Tonton Film" items={continueWatching} />
      <Category title="Top Rating Film dan Series Hari Ini" items={topRated}/>
      <Category title="Film Trending" items={trendingMovies} />
      <Category title="Rilis Baru" items={newReleases} />

      <Footer />
    </div>
  );
};

export default Home;
