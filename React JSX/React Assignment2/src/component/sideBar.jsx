import React, { useEffect, useState } from 'react'
import Post from './Post'

const sideBar = () => {
    let postArrObj = [{
        id: "1",
        title: "His mother had always taught him",
        body: `His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.`,

    },
    {
        id: "2",
        title: "He was an expert but not in a discipline",
        body: `He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.`,
    },
    {
        id: "3",
        title: "This is important to remember.",
        body: `This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.`,
    },
    {
        id: "4",
        title: "She wanted rainbow hair.",
        body: `She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.`,
    }
    ]


    return (
        <>
            <main className="container">

                {/* <!-- Sidebar --> */}

                <aside className="sidebar">

                    <h2>All Posts</h2>

                    <div id="postList">


                        {postArrObj.map((post) => {
                            let id = post.id;

                            return (
                                <div className="post-item dummy" key={id} onClick={() => {
                                    localStorage.setItem("post", JSON.stringify(post))
                                }}>

                                    <h2 key={id} onClick={() => {
                                        localStorage.setItem("post", JSON.stringify(post))
                                    }} className="dummy" >{post.title}</h2>

                                    <p key={id} onClick={() => {
                                        localStorage.setItem("post", JSON.stringify(post))
                                    }} className="dummy" >{post.body.slice(0, 130)}</p>
                                </div>
                            )
                        })
                        }

                    </div>

                </aside>


                {/* <!-- Center --> */}

                {Post()}

            </main></>
    )
}

export default sideBar