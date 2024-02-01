import Image from 'next/image';
import './blog.css'
import Dropdowns from './blogcomponents/dropdowns';
import Blogcard from './blogcomponents/blogcard';


const items = [
    {
        title: "Filter by Topic",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    },
    {
        title: "Filter by Solutions",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    },
    {
        title: "Sort by",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    }
]

const blogs = [
    {
      blogTitle: "Integer Maecenas Eget Viverra",
      blogDesc:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
      imgLink:
        "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
    },
    {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
      },
      {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
      }
]

export default function Blog () {
    return (
        <>
            <div >
                <Image src="/blog.jpg" alt="case" className="w-full h-[70vh]" width="1519" height="0"/>
            </div>

            <div>
                {items.map(item => (
                        <Dropdowns 
                            title={item.title}
                            field1={item.field1}
                            field2={item.field2}
                            field3={item.field3}
                            field4={item.field4}
                        />
                    ))
                }
            </div>

            <div className="blog-container p-8">
                {blogs.map((blog,i) => (
                <Blogcard
                    key={i}
                    title={blog.blogTitle}
                    desc={blog.blogDesc}
                    lnk={blog.imgLink}
                />
                ))}
            </div>

        </>
    );
};