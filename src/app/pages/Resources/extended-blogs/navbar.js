import './App.css';
import phone from './phone.svg'

function Navbar() {
return (
<nav class="bg-gray-50 border  py-3 px-4">
    <div class="container mx-auto flex justify-between items-center">

        <div class="text-white text-lg font-semibold">
            <img className="w-100 h-10" src="logo.png" alt="GetMax" />
        </div>


        <div class="flex space-x-4">
            <a href="#" class="text-black hover:text-purple-800">RCM Services</a>
            <a href="#" class="text-black hover:text-purple-800">Resources</a>
            <a href="#" class="text-black hover:text-purple-800">Specialization</a>
            <a href="#" class="text-black hover:text-purple-800">Why GetMax?</a>
        </div>


        <div class="text-black flex items-center">
            <div>
                <img className="px-2" src={phone} />
            </div>
            <div>
                <p className="text-xs">+91123456789</p>
                <p className="text-xs">Mon-Sat <span className="font-bold text-xs">9am-6pm</span></p>
            </div>
        </div>
    </div>
</nav>

);
}

export default Navbar;