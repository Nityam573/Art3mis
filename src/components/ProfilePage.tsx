import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NFTData {
  id: string;
  image: string;
  date: string;
  description: string;
}

const ProfilePage: React.FC = () => {
  const [nfts] = useState<NFTData[]>([
    { id: '1', image: '/images/20.png', date: '9/30/2024', description: 'The Judgement card represents rebirth, self-reflection, and awakening. It signifies a pivotal moment for evaluation and transformation.' },
    { id: '2', image: '/images/11.png', date: '7/18/2024', description: 'The Judgement card represents rebirth, self-reflection, and awakening. It signifies a pivotal moment for evaluation and transformation.' },
    { id: '3', image: '/images/3.png', date: '6/30/2024', description: 'The Judgement card represents rebirth, self-reflection, and awakening. It signifies a pivotal moment for evaluation and transformation.' },
    { id: '4', image: '/images/13.png', date: '6/22/2024', description: 'we' },
    { id: '5', image: '/images/9.png', date: '6/07/2024', description: '' },
    { id: '6', image: '/images/12.png', date: '4/18/2024', description: '' },
    { id: '7', image: '/images/14.png', date: '4/16/2024', description: '' },
    { id: '8', image: '/images/2.png', date: '4/08/2024', description: ''  },
    { id: '9', image: '/images/1.png', date: '3/29/2024', description: ''  },
    { id: '10', image: '/images/4.png', date: '3/24/2024', description: ''  },
    { id: '11', image: '/images/20.png', date: '3/11/2024', description: ''  },
    { id: '12', image: '/images/18.png', date: '2/18/2024', description: ''  },
    { id: '13', image: '/images/20.png', date: '9/30/2024', description: ''  },
    { id: '14', image: '/images/11.png', date: '7/18/2024', description: ''  },
    { id: '15', image: '/images/3.png', date: '6/30/2024', description: ''  },
    { id: '16', image: '/images/13.png', date: '6/22/2024', description: ''  },
    { id: '17', image: '/images/9.png', date: '6/07/2024', description: ''  },
    { id: '18', image: '/images/12.png', date: '4/18/2024', description: '' },
  ]);

  const [selectedNFT, setSelectedNFT] = useState<NFTData | null>(null);

  const handleNFTClick = (nft: NFTData) => {
    setSelectedNFT(nft);
  };

  const handleBack = () => {
    setSelectedNFT(null);
  };

  if (selectedNFT) {
    return (
      <div
        className="relative min-h-screen w-full bg-no-repeat bg-cover p-6"
        style={{ backgroundImage: "url('/images/bg_profile.png')" }}
      >
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <button
            onClick={handleBack}
            className="block w-36 h-12 text-center text-white text-lg font-bold leading-[3rem] shadow-lg hover:scale-105 transition-transform"
            style={{
              backgroundImage: "url('/images/Bg_button.png')",
              backgroundSize: 'cover',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '3px 0',
              cursor: 'pointer',
            }}
          >
            Back
          </button>
        </div>

        <div className="relative">
          <div
            className="absolute"
            style={{
              top: '150px',
              left: '350px',
              width: '750px',
              height: '350px',
            }}
          >
            <div
              className="w-full h-full rounded-lg p-6"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #faa5a5',
                boxShadow: '0 0 10px #faa5a5, 0 0 20px #faa5a5, 0 0 10px #faa5a5',
                animation: 'glow 1.5s ease-in-out infinite alternate',
              }}
            >
              <p
                className="text-center text-[#ffbb54] overflow-hidden leading-9"
                style={{
                  fontFamily: 'Irish Grover, cursive',
                  fontSize: '22px',
                  fontWeight: 400,
                }}
              >
                {selectedNFT.description || 'No description available.'}
              </p>
            </div>
          </div>

          <div
            className="absolute"
            style={{
              top: '350px',
              left: '200px',
            }}
          >
            <img
              src="/images/cat_avatar.png"
              alt="Cat Avatar"
              className="w-40 h-45 object-contain"
            />
          </div>

          <div
            className="absolute"
            style={{
              top: '150px',
              left: '1120px',
            }}
          >
            <div className="flex flex-col items-center">
              <img
                src={selectedNFT.image}
                alt={`NFT ${selectedNFT.id}`}
                className="w-40 h-60 object-contain"
              />
              <div
                className="w-full text-center text-white text-s font-semibold leading-6 mt-2"
                style={{
                  backgroundImage: "url('/images/Bg_button.png')",
                  backgroundSize: 'cover',
                  color: '#fff',
                  letterSpacing: '1px',
                  padding: '18px 0',
                }}
              >
                {selectedNFT.date}
              </div>
            </div>
          </div>

          <div
            className="absolute"
            style={{
              top: '520px',
              left: '650px',
            }}
          >
            <button
              className="uppercase font-bold text-[#ffbb54] hover:scale-105 transition-transform"
              style={{
                fontFamily: 'Irish Grover, cursive',
                fontSize: '24px',
                fontWeight: 400,
                width: '200px',
                height: '60px',
                borderRadius: '16px',
                border: '2px solid #ffa336',
                background: 'linear-gradient(to bottom, rgba(255, 163, 54, 0.15), rgba(0, 0, 0, 0.25))',
                boxShadow: '0 0 10px #c77f7f, 0 0 20px #c77f7f',
                animation: 'shareButtonGlow 1.5s ease-in-out infinite alternate',
                position: 'relative',
                paddingRight: '40px',
              }}
            >
              <style>
                {`
                @keyframes shareButtonGlow {
                  from {
                    box-shadow: 0 0 10px #c77f7f, 0 0 20px #c77f7f;
                  }
                  to {
                    box-shadow: 0 0 15px #c77f7f, 0 0 25px #c77f7f;
                  }
                }
              `}
              </style>
              Share
              <img
                src="/images/paw-icon.png"
                alt="Paw Icon"
                className="w-6 h-6 object-contain absolute"
                style={{
                  right: '20px', // Position from right edge of button
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen w-full bg-no-repeat bg-cover p-6"
      style={{
        backgroundImage: "url('/images/bg_profile.png')",
      }}
    >
      {/* Home Button */}
      <div className="absolute top-6 right-6">
        <Link
          to="/"
          className="block w-36 h-12 text-center text-white text-lg font-bold leading-[3rem] shadow-lg hover:scale-105 transition-transform"
          style={{
            backgroundImage: "url('/images/Bg_button.png')",
            backgroundSize: 'cover',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            padding: '3px 0',
            cursor: 'pointer',
          }}
        >
          Home
        </Link>
      </div>

      <br /> <br /> <br />

      {/* Card Grid */}
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              onClick={() => handleNFTClick(nft)}
              className="bg-no-repeat bg-center bg-cover rounded-lg flex flex-col items-center justify-center cursor-pointer"
              style={{
                backgroundImage: "url('/images/image.png')",
                backgroundSize: 'cover',
                width: '120px',
                height: '200px',
              }}
            >
              <img
                src={nft.image}
                alt={`NFT ${nft.id}`}
                className="w-full h-4/5 object-contain mb-1"
              />
              {/* Date */}
              <div
                className="w-full text-center text-white text-xs font-semibold leading-6"
                style={{
                  backgroundImage: "url('/images/Bg_button.png')",
                  backgroundSize: 'cover',
                  color: '#fff',
                  letterSpacing: '1px',
                  padding: '8px 0',
                }}
              >
                {nft.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;