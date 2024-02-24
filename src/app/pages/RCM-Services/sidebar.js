import { Link } from "react-scroll";

function sidebar() {
return (
<div className="flex text-center">

    <aside class="top-20 w-1/6 bg-gray-50 text-black py-2 sticky h-screen overflow-y-auto hidden md:block">
        <nav className="space-y-4 items-center">
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="one">
            Revenue Cycle Management (RCM)
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="two">
            Patient Demographic Entry
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="three">
            Revenue Cycle Management (RCM)
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="four">
            Patient Demographic Entry
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="five">
            Revenue Cycle Management (RCM)
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="six">
            Patient Demographic Entry
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="seven">
            Revenue Cycle Management (RCM)
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="eight">
            Patient Demographic Entry
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="nine">
            Revenue Cycle Management (RCM)
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="ten">
            Patient Demographic Entry
            </Link>
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="eleven">
            Revenue Cycle Management (RCM)
            </Link>
            <Link className="block py-4  rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="twelve">
            Patient Demographic Entry
            </Link>
        </nav>
    </aside>

    <main className="flex-1 ml-12 mr-12">

        <section id="one" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <section id="two" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2 order-2 md:order-1">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
                <div
                    class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto order-1 md:order-2">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
            </div>
        </section>

        <section id="three" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <section id="four" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2 order-2 md:order-1">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
                <div
                    class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto order-1 md:order-2">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
            </div>
        </section>

        <section id="five" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <section id="six" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2 order-2 md:order-1">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
                <div
                    class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto order-1 md:order-2">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
            </div>
        </section>

        <section id="seven" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <section id="eight" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2 order-2 md:order-1">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
                <div
                    class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto order-1 md:order-2">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
            </div>
        </section>

        <section id="nine" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <section id="ten" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2 order-2 md:order-1">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
                <div
                    class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto order-1 md:order-2">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
            </div>
        </section>

        <section id="eleven" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <section id="twelve" class="mb-8 flex flex-col items-center min-h-screen">
            <div class="flex flex-col items-center mb-8 md:mb-32">
                <p class="text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h2 class="text-3xl font-bold">Revenue Cycle Management</h2>
            </div>
            <div class="flex flex-col md:flex-row justify-around">
                <div class="flex flex-col space-y-6 md:space-y-14 w-full md:w-1/2 order-2 md:order-1">
                    <p class="text-left">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae
                        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                        interdum
                        eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
                        lacus
                        at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
                        iaculis
                        arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id,
                        ultricies vel
                        nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit.
                    </p>
                    <p class="bg-gray-100 p-4 shadow-xl rounded-xl">Lorem ipsum dolor sit amet</p>
                </div>
                <div
                    class="flex bg-gray-100 items-center shadow-xl rounded-xl mb-4 md:mb-0 md:mr-4 w-full md:w-auto order-1 md:order-2">
                    <img src="/business.png" alt="description" class="w-full md:w-auto" />
                </div>
            </div>
        </section>

    </main>
    
</div>
);
}

export default sidebar;