import { useState, useEffect } from 'react'
import { client, urlFor } from '../sanity/client'

// Fallback data in case Sanity is not available
const fallbackBoardMembers = [
  { name: "Rtr. Anand", position: "Club Advisor & IPP", image: "/board/anand.jpg" },
  { name: "Rtr. Nakshatra", position: "President", image: "/board/nakshatra.jpg" },
  { name: "Rtr. Sivabalan", position: "Secretary – Administration", image: "/board/sivabalan.jpg" },
  { name: "Rtr. Janani", position: "Secretary – Communication", image: "/board/janani.jpg" },
  { name: "Rtr. Kishore", position: "Sergeant at Arms", image: "/board/kishore.jpg" },
  { name: "Rtr. Nithya Sree", position: "Vice President", image: "/board/nithya.jpg" },
  { name: "Rtr. Kavya", position: "Treasurer", image: "/board/kavya.jpg" },
  { name: "Rtr. Srikanth", position: "DPP", image: "/board/srikanth.jpg" },
  { name: "Rtr. Susmitha", position: "All Avenue Chair", image: "/board/susmitha.jpg" },
  { name: "Rtr. Nitheesh", position: "Community Service", image: "/board/nitheesh.jpg" },
  { name: "Rtr. Bhavana Sree", position: "Professional Service", image: "/board/bhavana.jpg" },
  { name: "Rtr. Hema Sri", position: "Club Service", image: "/board/hemasri.jpg" },
  { name: "Rtr. Tharshini", position: "International Service", image: "/board/tharshini.jpg" },
  { name: "Rtr. Surya", position: "Club Membership Chair", image: "/board/surya.jpg" },
  { name: "Rtr. Akshaya Keerthi", position: "Young Leaders Contact", image: "/board/akshaya.jpg" },
  { name: "Rtr. Danish", position: "Club Foundation Chair", image: "/board/danish.jpg" },
  { name: "Rtr. Nandhan", position: "Editor", image: "/board/nandhan.jpg" },
  { name: "Rtr. Vasantha Bala", position: "Public Relation Chair", image: "/board/vasantha.jpg" },
  { name: "Rtr. Kanika", position: "Rotaract Learning Facilitator", image: "/board/kanika.jpg" },
  { name: "Rtr. Ajith", position: "Blood Donation Chair", image: "/board/ajith.jpg" },
  { name: "Rtr. Mohammed Jubair", position: "Web Service", image: "/board/jubair.jpg" },
];

const Board = () => {
  const [boardMembers, setBoardMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const query = `*[_type == "boardMember"] | order(order asc, name asc) {
          _id,
          name,
          position,
          image,
          bio,
          order
        }`
        
        const data = await client.fetch(query)
        
        // Always use Sanity data (even if empty)
        const sanityMembers = data.map(member => ({
          name: member.name,
          position: member.position,
          image: member.image ? urlFor(member.image).width(400).height(400).url() : '/board/default.jpg',
          bio: member.bio
        }))
        setBoardMembers(sanityMembers)
        
      } catch (error) {
        console.error('Error fetching board members:', error)
        setError('Unable to load board members')
      } finally {
        setLoading(false)
      }
    }

    fetchBoardMembers()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    )
  }

  if (boardMembers.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-6 py-16 transition-colors duration-500">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-10">Board Members 2025–26</h1>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              No board members have been added yet.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Please add board members through the admin panel.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-6 py-16 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10">Board Members 2025–26</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-rose-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-4 border-4 border-rose-300 dark:border-rose-600"
                onError={(e) => {
                  // Fallback to a default image if the image fails to load
                  e.target.src = '/board/default.jpg'
                }}
              />
              <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{member.position}</p>
              {member.bio && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
