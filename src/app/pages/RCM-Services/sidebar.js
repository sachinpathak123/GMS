import { Link } from "react-scroll";


function sidebar() {
return (
<div className="flex text-center">
    <aside className="top-20 w-1/6 bg-gray-50 text-black py-2 sticky h-screen overflow-y-auto">
        <nav className="space-y-4">
            <Link
                className="text-center block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
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
            <Link className="block py-2 rounded transition duration-300 hover:text-purple-900 border-b border-black"
                activeClass="text-purple-900 font-semibold" smooth spy to="twelve">
            Patient Demographic Entry
            </Link>
        </nav>
    </aside>


    <main className="flex-1 ml-12 mr-12">
        <section id="one" className="mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Revenue Cycle Management</h>
            </div>
            <div className="flex">
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>
        <section id="two" className="pt-4 mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Patient Demographic Entry</h>
            </div>
            <div className="flex">
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
            </div>
        </section>

        <section id="three" className="pt-4 mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Revenue Cycle Management</h>
            </div>
            <div className="flex">
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <section id="four" className="pt-4 mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Patient Demographic Entry</h>
            </div>
            <div className="flex">
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8 text-md">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
            </div>
        </section>

        <section id="five" className="mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Revenue Cycle Management</h>
            </div>
            <div className="flex">
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>
        <section id="six" className="pt-4 mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Patient Demographic Entry</h>
            </div>
            <div className="flex">
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
            </div>
        </section>

        <section id="seven" className="pt-4 mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Revenue Cycle Management</h>
            </div>
            <div className="flex">
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <section id="eight" className="pt-4 mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Patient Demographic Entry</h>
            </div>
            <div className="flex">
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8 text-md">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
            </div>
        </section>

        <section id="nine" className="mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Revenue Cycle Management</h>
            </div>
            <div className="flex">
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>
        <section id="ten" className="pt-4 mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Patient Demographic Entry</h>
            </div>
            <div className="flex">
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
            </div>
        </section>

        <section id="eleven" className="pt-4 mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Revenue Cycle Management</h>
            </div>
            <div className="flex">
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <section id="twelve" className="pt-4 mb-8 flex flex-col items-center min-h-screen ">
            <div className="flex flex-col items-center mb-32">
                <p className=" text-purple-900 text-xl font-bold mb-4">Our Services</p>
                <h className="text-3xl font-bold">Patient Demographic Entry</h>
            </div>
            <div className="flex">
                <div className="mx-32 flex flex-col items-center">
                    <p className="mb-8 text-md">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                        urna.
                        Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                        eu. Curabitur
                        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                        sodales sodales.
                        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
                        tempus orci
                        facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                        lacus vitae
                        gravida viverra. Fusce vel tempor elit.</p>
                    <p className="bg-gray-100 p-4 border rounded-lg  ">lorem ipsum dolor sit amet</p>
                </div>
                <img className="max-w-80 max-h-80" src="example.jpg" alt="Description" />
            </div>
        </section>

    </main>
</div>
);
}

export default sidebar;