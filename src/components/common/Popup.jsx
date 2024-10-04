import { MdOutlineVolumeOff, MdPlayCircleOutline } from "react-icons/md";
import { PiPlusCircleLight } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";



const Popup = ({ series, isOpen, onClose }) => {
  if (!isOpen) return null;

  let iconStyles = { fontSize: "10em" };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 overflow-auto">
      <div className="bg-custom-gray text-white rounded-lg w-11/12 md:w-5/6 lg:w-4/5 max-h-[90vh] overflow-y-auto relative">
        {/* Gambar Poster */}
        <div className="relative w-full bg-cover bg-center h-auto">
          <img
            src={series.image}
            alt={series.title}
            className="w-full rounded-t-lg h-auto"
          />

          {/* Play Button */}
          <button
            onClick={onClose}
            className="absolute bottom-10 left-10 rounded-full flex items-center space-x-2 bg-blue-800 text-white px-8 py-1 hover:bg-blue-600"
          >
            Mulai
          </button>

          {/* Add Icon */}
          <PiPlusCircleLight
            style={{ position: "absolute", bottom: "36px", left: "150px" }}
            size="40px"
          />
          {/*Title */}
          <div className="absolute bottom-20 left-5 p-4 flex items-center">
            <h2 className="text-2xl font-medium">{series.title}</h2>
          </div>

          {/* Sound Icon */}
          <button className="bg-transparent absolute bottom-10 right-10 border-gray-500 rounded-full px-2 py-2">
            <MdOutlineVolumeOff size={25} />
          </button>
        </div>

        {/* Series Info */}
        <div className="p-6 flex">
          {/* Left Section: Year, Episodes, Age, and Description */}
          <div className="flex-1">
            {/* Year, Total Episodes, and Age Rating */}
            <div className="flex items-center space-x-4 mb-4">
              <span>{series.date}</span>
              <span>{series.totalEpisodes}</span>
              <span className="border border-white px-2 py-1 text-sm">
                {series.ageRating}
              </span>
            </div>

            {/* Deskripsi */}
            <p className="mt-4 text-gray-400">{series.description}</p>
          </div>

          {/*  Pemeran, Genre, and Pembuat film */}
          <div className="ml-8 w-1/3">
            {/* Cast */}
            <div className="flex justify-between mb-4">
              <p className="text-gray-500">Cast:</p>
              <p className="font-thin">{series.cast.join(", ")}</p>
            </div>

            {/* Genre */}
            <div className="flex justify-between mb-4">
              <p className="text-gray-500">Genre:</p>
              <p className="font-thin">
                {Array.isArray(series.genre)
                  ? series.genre.join(", ")
                  : series.genre}
              </p>
            </div>

            {/* Filmmaker */}
            <div className="flex justify-between mb-4">
              <p className="text-gray-500">Pembuat Film:</p>
              <p className="font-thin">{series.filmmaker}</p>
            </div>
          </div>
        </div>

        {/* Episodes */}
        <div className="p-6">
          <h3 className="text-2xl mt-8 mb-4">Episodes</h3>
          <div className="bg-custom-gray p-4 text-gray-400 font-normal rounded-lg">
            {series.episodes.map((episode, index) => (
              <div key={index} className="flex space-x-4 mb-4">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-24 h-auto rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-white mb-2">
                    {episode.title}
                  </h4>
                  <p>{episode.description}</p>
                </div>
                <p>
                  <strong>{episode.duration}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-8 mb-4 bg-gray-600 text-white rounded px-4 py-2 hover:bg-gray-500 mx-6"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
