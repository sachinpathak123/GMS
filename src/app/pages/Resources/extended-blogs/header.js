import MyListComponents from './tags.js'
import heart from './heart.svg'
import share from './share.svg'
import './index.css';

function Header() {
    return (
        <>
            <div className="px-72">
                <div>
                    <h1 className='text-start mt-8 font-bold text-4xl'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                        massa mi. (this is title)
                    </h1>
                    <p className="mt-6 text-start">Discover a treasure trove of insights in our blogs—unleashing knowledge, sparking creativity, and nurturing your passion for continuous learning</p>
                </div>
                <div className="flex items-centertext-center mt-2">
                    <p className="mr-5 text-gray-400 text-lg font-medium">Dec 01 · 2023</p>
                    <MyListComponents />
                </div>
                <div className='flex mt-12 border-t-2 border-b-2'>
                    <img className='px-1.5' src={heart}/>
                    <p className='px-1.5'>300</p>
                    <img className='px-1.5' src={share}/>
                    <p className='px-1.5' >300</p>
                </div>
            </div>
        </>
    );
}

export default Header;