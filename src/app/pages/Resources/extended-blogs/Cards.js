import './index.css';

const CardList = () => {
  const cardData = [
    {
      title: 'Card 1',
      description: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.',
      image: '/boat.jpg',
      name: 'Joanna Wellick',
      date: 'June 28,2018',
      shares: '1k Shares',
    },
    {
      title: 'Card 2',
      description: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.',
      image: './mountains.jpg',
      name: 'Joanna Wellick',
      date: 'June 28,2018',
      shares: '1k Shares',
    },
    {
      title: 'Card 3',
      description: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.',
      image: './stones.jpg',
      name: 'Joanna Wellick',
      date: 'June 28,2018',
      shares: '1k Shares',
    },
  ];

  return (
    <div className="flex flex-wrap justify-between px-48 mt-16 ">
      {cardData.map((card, index) => (
        <div key={index} className="w-72 bg-gray-50 shadow-md rounded-md overflow-hidden p-0.5 border border-gray-100">
          <img src={card.image} alt={`Card ${index + 1}`} className="w-full h-48 object-cover object-center rounded-md" />
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <div className='flex justify-between items-center'>
                <p className="text-sm">{card.name}</p>
                <p className="text-xs">{card.date}</p>
                <p className="text-xs">{card.shares}</p>
              </div>
            <p className="text-gray-700 mt-4">{card.description}</p>
          </div>
          <p className="text-purple-700 font-semibold">Learn More</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
