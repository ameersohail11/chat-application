import React from 'react'
import Chitchat from './Chitchat'
import  useGetConversations  from '../../hooks/useGetConversations'
import  {getRandomEmoji}  from '../../utils/emojis'

const Chitchats = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS",conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
    {conversations.map((conversation, idx) => (
      <Chitchat
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIdx={idx === conversations.length - 1}
      />
    ))}

    {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
  </div>
  )
}

export default Chitchats



// import React from 'react'
// import Chitchat from './Chitchat'

// const Chitchats = () => {
//   return (
//     <div className='py-2 flex-col overflow-auto' >
//         <Chitchat />
//         <Chitchat />
//         <Chitchat />
//         <Chitchat />
//         <Chitchat />
//         <Chitchat />


//     </div>
//   )
// }

// export default Chitchats