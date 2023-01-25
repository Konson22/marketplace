import { FaWallet, FaHandshake, FaUnity } from 'react-icons/fa'


export default function Features() {
  return (
    <div className='feature-container home-section '>
      <div className='section-title text-center'>
        <h1>Features</h1>
      </div>
      <div className='section-body'>
        {featuresData.map((feature, index) => (
          <div className='feature-card' key={index}>
            <div className="d-flex align-items-center">
              {feature.icon}
              <h4 className='p-0 m-0'>{feature.title}</h4>
            </div>
            <p>{feature.discription}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


const featuresData = [
    {
        title:`Save Money`,
        discription:`At the Mission Store, you can find quality products at At the Mission Store, you can find quality products at affordable prices, affordable prices, even on a limited budget.`,
        icon:<FaWallet className='icon' />
    },
    {
        title:`Find Something Unique`,
        discription:`Look through our large inventory of products At the Mission Store, you can find quality products at affordable prices, and find something unique and useful.`,
        icon:<FaHandshake className='icon' />
    },
    {
        title:`Present your product`,
        discription:`In a website store, you can write detailed At the Mission Store, you can find quality products at affordable prices, product descriptions, provide details such.`,
        icon:<FaUnity className='icon' />
    },
]