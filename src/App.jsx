import { useState } from "react";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import PostCard from "./PostCard";



function App() {
  const postData = {
    id: 1,
    username: "exeonicdotcom",
    logo: "exeonic..png",
    time: "4d",
    image: "post.jpg",
    caption: "We're Hiring...",
  };

  const posts = Array(3).fill(postData);

  return (
    <>
<div className="w-screen overflow-x-hidden">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
<div className="
  relative 
  w-[30px] 
  xxxs:top-20 xxxs:right-[124px]
  xxs:top-20 xxs:-left-[125px]
  xs:top-20 xs:right-28 xs:block
  sm:relative 

  md:relative md:top-0 md:mx-auto md:w-[690px] md:left-8 md:right-0
  lg:w-[690px] lg:mx-auto lg:left-0 lg:right-0 
  xl:w-[690px] 
  2xl:w-[690px] 

  bg-white p-6 h-screen space-y-10
">



        {posts.map((post, index) => (
          <div key={index}>

            <div className="flex flex-col items-start ml-[84px] ">
              <div className="flex items-center space-x-3 mb-2 w-[468px]">
                <img
                  src={post.logo}
                  alt="Exeonic Logo"
                  className="w-9 h-9 rounded-full border border-gray-300 md:left-0 object-cover lg:left-0 xs:w-8 xs:h-8  xs:relative xs:left-6 xs:top-0 xxs:relative xxs:left-3 xxs:top-0 xxxs:relative xxxs:left-3 xxxs:top-0"
                />
                <span className="text-[14px] font-semibold text-black lg:left-0 md:left-0  xs:relative xs:left-6 xxs:relative xxs:left-3 xxs:top-0 xxxs:relative xxxs:left-6 xxxs:top-0">
                  {post.username}
                </span>
                <span className="text-sm text-gray-400 lg:block lg:-left-2 md:left-0  xs:relative xs:hidden xxs:hidden xxxs:hidden">• {post.time}</span>
                <span className="absolute text-sm text-black left-[542px] xs:left-[479px] xxs:left-[430px] xxxs:left-[370px]  lg:left-[542px] md:left-[542px] ">
                  •••
                </span>
              </div>

              <div className="bg-white border border-gray-300 
              xxxs:w-[330px]
  xxs:w-[380px] 
  xs:w-[468px] 
  w-[468px] 
  md:border-t md:border-r md:border-l md:rounded-sm  
  lg:border-t lg:border-r lg:border-l lg:rounded-sm 
  xs:border-b xs:border-t-0 xs:border-l-0 xs:border-r-0 
  xs:relative xs:left-0 
  overflow-hidden flex justify-center items-center rounded-t-sm aspect-square">
  
  <img
    src="post.jpg"
    alt="Post image"
    className="w-full h-full object-cover"
  />
</div>


              <div className="h-14 w-[468px] md:border-r xxs:relative xxs:right-10  md:border-l lg:border-r lg:border-l xs:w-[468px]  xs:relative xs:left-0 xs:border-t-0 xs:border-l-0 xs:border-r-0 bg-white border border-t-0 border-gray-300 rounded-b flex items-center justify-between px-5">
                <a
                  href="#"
                  className="text-[14px] text-blue-700 hover:underline xs:text-bold xxs:ml-8 xs:-ml-2"
                >
                  View insights
                </a>
                <button className="h-8 w-24 bg-blue-600 rounded-lg text-[14px] md:-mr-2 xs:mr-10 xxs:mr-12 xxxs:mr-36 text-white font-semibold hover:bg-blue-500">
                  Boost post
                </button>
              </div>





  <div className="App">
      
      <PostCard />
    </div>
            </div>
          </div>  

        ))}




   <div className="App xxxs:block xxs:block xs:block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden p-6">
  {/* Fixed Top Bar */}
  <div className="fixed top-0 left-0 w-full bg-white  z-50 flex items-center justify-between px-4 py-2 xxxs:h-24">

    {/* Logo */}
    <div className="flex items-center xxxs:hidden xs:block xxs:block">
      <img
        src="/download.png"
        alt="Instagram Logo"
        className="w-32 h-29 object-contain xs:w-40 xs:h-36 xxs:w-36 xxs:h-32 xxxs:w-40 xxxs:h-36"
      />
    </div>

    {/* Search Bar */}
    <div className="flex items-center bg-gray-100 rounded-md px-3 py-1 w-[65%] h-10 mr-4 xs:w-[90%] xs:mr-14 xs:h-12 xxs:w-[85%] xxs:h-12 xxxs:rounded-lg xxxs:h-14 xxxs:relative xxxs:top-0 xxxs:left-4 xxxs:w-[85%]">
      <img
        src="https://brandeps.com/icon-download/S/Search-icon-vector-19.svg"
        alt="Search Icon"
        className="w-4 h-4 mr-2 xxxs:w-6 xxxs:h-6 xxxs:relative xxxs:top-0 xxxs:left-2 xs:top-0 xs:left-2"
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none text-sm text-gray-600 w-full xxxs:text-xl xxxs:relative xxxs:top-0 xxxs:left-2"
      />
    </div>

    {/* Heart Icon */}
    <div className="ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-black xxxs:w-10 xxxs:h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
        />
      </svg>
    </div>
  </div>

     <div class="flex items-center">
    <img
      src="https://brandeps.com/icon-download/H/Heart-icon-vector-33.svg"
      alt="Heart Icon"
      class="w-6 h-6"
    />
  </div>
</div>






<div class="m-0 p-0 overflow-hidden">
  <div class="
    fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-300 z-50 flex justify-around items-center 
    md:top-0 md:bottom-auto md:w-20 md:h-screen md:flex-col md:justify-start md:items-start md:border-r md:border-t-0 
    2xl:w-[350px] 2xl:h-screen 2xl:flex-col 
    lg:w-[240px] lg:h-screen lg:flex-col lg:justify-start lg:items-start
  ">
    
   
    <div class="hidden md:flex h-16 items-center px-4 mt-2">
      <img src="download.png" alt="main-logo" class="hidden 2xl:block lg:block md:hidden w-36 h-12 object-contain mt-2 2xl:mt-12" />
      <img src="mai.png" alt="small-logo" class="2xl:hidden lg:hidden w-6 h-6 md:ml-1.5 md:mt-5 md:w-7 md:h-7" />
    </div>

 
    <div class="flex md:flex-col w-full justify-around md:justify-start md:items-start md:space-y-6 px-2 py-2 2xl:mt-12">

      <div class="flex flex-col w-48 md:flex-row items-center gap-1 md:gap-4 cursor-pointer md:ml-2 md:mt-5 lg:relative lg:left-3 md:pl-2 2xl:pl-4  hover:bg-gray-100 rounded-lg px-2 py-2 transition-colors duration-200">
        <img src="https://brandeps.com/icon-download/H/Home-icon-vector-28.svg" class="w-6 h-6 shrink-0" />
        <span class="hidden 2xl:inline text-sm font-semibold lg:inline">Home</span>
      </div>

      <div class="flex flex-col md:flex-row   w-48 items-center xs:hidden xxs:hidden xxxs:hidden lg:relative lg:left-3 gap-1 md:gap-4 md:ml-2 cursor-pointer md:pl-2 2xl:pl-4 hover:bg-gray-100 rounded-lg px-2 py-2 transition-colors duration-200">
        <img src="https://brandeps.com/icon-download/S/Search-icon-vector-19.svg" class="w-6 h-6 shrink-0" />
        <span class="hidden 2xl:inline text-sm lg:inline">Search</span>
      </div>

      <div class="flex flex-col md:flex-row  w-48 items-center lg:relative lg:left-3 gap-1 md:ml-2 md:gap-4 cursor-pointer md:pl-2 2xl:pl-4 hover:bg-gray-100 rounded-lg px-2 py-2 transition-colors duration-200">
        <img src="image.png" class="w-6 h-6 shrink-0" />
        <span class="hidden 2xl:inline text-sm lg:inline">Explore</span>
      </div>

      <div class="flex flex-col md:flex-row  w-48 items-center xxxs:relative xxxs:top-1 lg:relative lg:left-3 md:ml-2 gap-1 md:gap-4 cursor-pointer md:pl-2 2xl:pl-4 hover:bg-gray-100 rounded-lg px-2 py-2 transition-colors duration-200">
        <img src="reel.png" class="w-5 h-5 shrink-0" />
        <span class="hidden 2xl:inline text-sm lg:inline">Reels</span>
      </div>


      <div class="flex flex-col md:flex-row  w-48 items-center lg:relative lg:left-3 md:ml-2 gap-1 md:gap-4 cursor-pointer md:pl-2 2xl:pl-4 hover:bg-gray-100 rounded-lg px-2 py-2 transition-colors duration-200">
        <img src="Plus.png" class="w-6 h-6 shrink-0" />
        <span class="hidden 2xl:inline text-sm lg:inline">Create</span>
      </div>


      <div class="flex flex-col md:flex-row  w-48 items-center lg:relative lg:left-3 md:ml-2 gap-1 md:gap-4 cursor-pointer md:pl-2 2xl:pl-4 hover:bg-gray-100 rounded-lg px-2 py-2 transition-colors duration-200">
        <img src="send.png" class="w-5 h-5 -rotate-45 shrink-0" />
        <span class="hidden 2xl:inline text-sm lg:inline">Messages</span>
      </div>

      <div class="flex flex-col md:flex-row  w-48 items-center lg:relative xs:hidden xxs:hidden xxxs:hidden lg:left-3 md:ml-2 gap-1 md:gap-4 cursor-pointer md:pl-2 2xl:pl-4 hover:bg-gray-100 rounded-lg px-2 py-2 transition-colors duration-200">
        <img src="https://brandeps.com/icon-download/H/Heart-icon-vector-33.svg" class="w-6 h-6 shrink-0" />
        <span class="hidden 2xl:inline text-sm lg:inline">Notification</span>
      </div>

<div class="flex items-center gap-2
     xxs:hidden xxxs:hidden xl:flex 
     w-48 
     lg:relative lg:left-3 md:ml-2 
     md:pl-2 2xl:pl-4 
     hover:bg-gray-100 
     rounded-lg px-2 py-2 
     transition-colors duration-200 
     cursor-pointer">

  <img src="list.png" class="w-6 h-6 shrink-0" />

  <span class="text-sm hidden lg:inline">
    Dashboard
  </span>
</div>





      <div class="flex flex-col md:flex-row items-center w-48 lg:relative lg:left-3 md:ml-2 gap-1 md:gap-4 cursor-pointer rounded-lg md:pl-2 2xl:pl-4 hover:bg-gray-100  px-2 py-2 transition-colors duration-200">
        <img src="exeonic..png" class="rounded-full w-6 h-6 shrink-0 border border-gray-400" />
        <span class="hidden 2xl:inline text-sm lg:inline">Profile</span>
      </div>



<div class="hidden 2xl:flex items-center gap-3 w-48 cursor-pointer 2xl:ml-8 hover:bg-gray-100 rounded-lg px-2 py-2 transition-colors duration-200">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAY1BMVEX///8AAAD8/PyqqqrExMQrKyvm5uaamprR0dHx8fE+Pj7U1NTMzMwuLi7JyclFRUXg4OBubm6AgIBzc3MfHx+goKBaWloaGho3NzcmJia9vb23t7eIiIgVFRVSUlIODg6QkJDm/pTEAAACAklEQVR4nO3c25qCIBQF4K0VYVimppkd7P2fcsTUcLybuVj7Yv1PsD5A2QgoQkREaiTutMU4ueRXlnOZdRFKl5XnsF1yWJJJPrePa9BZeo0be+mCTjK4maGbNLSMd4j7NG90itlexOzQIWZNInd0hkArJTpCoJAjOkLgIOgEoaeqNJFoedt4japRXKp6wu9aZinv0tcVD3SI2dvPmloa5zaUOA4dYzQWOOkTHaR3tVPxZw7oLFFmgsp4i62M83a5aIiNu28w7tbE/1h6ERERERER0UKMso6SVnmzw2jyKl1meUGX4VH0CvJU4CxeNY0X/M6dV37Gzx6dY7T3YU7oFDPb9xN6AH/VIhadIeAUbST6kaOno3xX4Y4IrF2U7U9d0QkCV6nREQK1mjext1f1vrES6+mqOtb0Mrbq5nBl9Y2O2m/zLUVtjZ0gutot6nRbldkRsmQ4ZnllZUXReoqIiIiIiIj+JjYp6CjkZrM6C9kqOid6xl+xOM5naE8azhc/x907LZ/aho8miZbv18O59AKdYvboR7CWphlu3um666Hjg+hHKXqu3Wm7zdWp2rvrBH+x4uug6HXj7yS26AiBVgx+/p74eVzLhtDn0EusZRwPd6DF6LhcdhvrLRV357P51wIJ/jEvwv8umCLDVRZdVoT/XBjax6Wg/1Gkq/9REBER0A/kFD2UMwrP0QAAAABJRU5ErkJggg==" class="w-6 h-6 shrink-0" />
  <span class="text-sm font-medium">More</span>
</div>


<div class="hidden 2xl:flex items-center gap-3 w-48 cursor-pointer 2xl:ml-8 2xl hover:bg-gray-100 rounded-lg px-2 py-2 transition-colors duration-200">
  <img src="data:image/png;base64,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" class="w-6 h-6 shrink-0" />
  <span class="text-sm font-medium">Also from Meta</span>
</div>




    </div>
  </div>
</div>

































      <div class="fixed top-0 left-[85%] -translate-x-1/2 w-[340px] bg-white z-50 xs:hidden xl:block xxs:hidden xxxs:hidden lg: 2xl:block 2xl:left-[70%]">



        <div class="h-14 w-full flex justify-start items-center gap-2 p-4 mt-4 ">
          <img
            class="w-10 h-10 rounded-full"
            src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=1024x1024&w=is&k=20&c=7tIplxfEDBzXiWRahv9ZI0AXK8GF1Pkrbs_KjPLjK8A="
            alt="icon"
          />
          <div class="flex flex-col">
            <span class="cursor-pointer text-[13px] font-semibold">Ahmad</span>
            <span class="text-[13px] text-gray-500">DEMO</span>
          </div>
          <button class="ml-auto text-[13px] text-blue-800 hover:underline font-semibold">
            Switch
          </button>
        </div>

        <div class="w-full bg-white px-4 mt-6">
          <div class="flex justify-between items-center mb-4">
            <span class="text-gray-700 font-semibold text-sm">
              Suggested for you
            </span>
            <span class="text-sm text-black cursor-pointer font-semibold hover:text-gray-300">
              See All
            </span>
          </div>

          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                  class="w-10 h-10 rounded-full object-cover"
                  src="https://i.pinimg.com/736x/2b/a2/45/2ba2455ca817f7659e9ebfe9d494c5db.jpg"
                  alt="profile"
                />
                <div class="text-sm">
                  <div class="font-semibold text-gray-800 cursor-pointer">
                    mughees.ismail
                  </div>
                  <div class="text-gray-500 text-xs">Suggested for you</div>
                </div>
              </div>
              <span class="text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-700">
                Follow
              </span>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                  class="w-10 h-10 rounded-full object-cover"
                  src="https://i.pinimg.com/736x/8f/2b/38/8f2b3863c034ee1991c5d24d6c08c77c.jpg"
                  alt="profile"
                />
                <div class="text-sm">
                  <div class="font-semibold text-gray-800 cursor-pointer">
                    sumeerasehar
                  </div>
                  <div class="text-gray-500 text-xs">Suggested for you</div>
                </div>
              </div>
              <span class="text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-700">
                Follow
              </span>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                  class="w-10 h-10 rounded-full object-cover"
                  src="https://i.pinimg.com/736x/d2/ee/cc/d2eecc07d66694333eb28e4287e9a3de.jpg"
                  alt="profile"
                />
                <div class="text-sm">
                  <div class="font-semibold text-gray-800 cursor-pointer">
                    maha_amir20
                  </div>
                  <div class="text-gray-500 text-xs">Suggested for you</div>
                </div>
              </div>
              <span class="text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-700">
                Follow
              </span>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                  class="w-10 h-10 rounded-full object-cover"
                  src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="profile"
                />
                <div class="text-sm">
                  <div class="font-semibold text-gray-800 cursor-pointer">
                    ushna4077
                  </div>
                  <div class="text-gray-500 text-xs">Suggested for you</div>
                </div>
              </div>
              <span class="text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-700">
                Follow
              </span>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                  class="w-10 h-10 rounded-full object-cover"
                  src="https://smileyworldz.com/wp-content/uploads/2023/12/20250310_153327-1536x1536.jpg"
                  alt="profile"
                />
                <div class="text-sm">
                  <div class="font-semibold text-gray-800 cursor-pointer">
                    shoaib_ali20
                  </div>
                  <div class="text-gray-500 text-xs">Suggested for you</div>
                </div>
              </div>
              <span class="text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-700">
                Follow
              </span>
            </div>
          </div>
        </div>

        <div class="w-full px-4 mt-6">
          <div class="text-center text-gray-400 text-xs space-y-2">
            <div class="flex flex-wrap justify-center gap-2">
              <a href="#" class="hover:underline">
                About
              </a>
              <span>·</span>
              <a href="#" class="hover:underline">
                Help
              </a>
              <span>·</span>
              <a href="#" class="hover:underline">
                Press
              </a>
              <span>·</span>
              <a href="#" class="hover:underline">
                API
              </a>
              <span>·</span>
              <a href="#" class="hover:underline">
                Jobs
              </a>
              <span>·</span>
              <a href="#" class="hover:underline">
                Privacy
              </a>
              <span>·</span>
              <a href="#" class="hover:underline">
                Terms
              </a>
              <span>·</span>
              <a href="#" class="hover:underline">
                Locations
              </a>
              <span>·</span>
              <a href="#" class="hover:underline">
                Language
              </a>
              <span>·</span>
              <a href="#" class="hover:underline">
                Meta Verified
              </a>
            </div>
            <div class="pt-1">© 2025 INSTAGRAM FROM META</div>
          </div>
        </div>
      </div>

     


<div class="flex p-4 relative
  xxxs:ml-2 sm:ml-4
  2xl:fixed 2xl:right-[2%] 2xl:top-[85%]
  xl:fixed xl:right-[7%] xl:top-[84%] xl:z-[9999] xl:block 
  md:fixed md:right-[6%] md:top-[60%] md:z-[9999] md:block
  sm:fixed sm:right-[15%] sm:top-[60%] sm:z-[9999] sm:block
  xs:hidden xxs:hidden xxxs:hidden
">

  <div class="flex bg-white px-4 py-2 rounded-full shadow-md shadow-gray-300 space-x-3 w-fit">

    <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke-width="1.8"
           stroke="currentColor"
           class="w-6 h-6 text-black">
        <path stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 14.25L10.5 11.25L13.5 14.25L16.5 11.25M21 12C21 16.4183 16.9706 20 12 20C10.6977 20 9.456 19.7531 8.33018 19.3091L3 21L4.69091 15.6698C4.24687 14.544 4 13.3023 4 12C4 7.58172 8.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" />
      </svg>
      <span class="text-black font-semibold hidden xs:inline sm:inline">Messages</span>
    </div>

    <div class="flex -space-x-2">
      <img class="w-8 h-8 rounded-full border-2 border-white object-cover"
           src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" />
      <img class="w-8 h-8 rounded-full border-2 border-white object-cover"
           src="https://randomuser.me/api/portraits/men/33.jpg" alt="User 2" />
      <img class="w-8 h-8 rounded-full border-2 border-white object-cover"
           src="https://randomuser.me/api/portraits/men/34.jpg" alt="User 3" />
    </div>

  </div>
</div>


<div class="
  fixed bottom-24 right-6 z-[9999]
  xs:block sm:hidden xxs:hidden xxxs:hidden
">
  <div class="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="1.8"
         stroke="currentColor"
         class="w-6 h-6 text-black">
      <path stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 14.25L10.5 11.25L13.5 14.25L16.5 11.25M21 12C21 16.4183 16.9706 20 12 20C10.6977 20 9.456 19.7531 8.33018 19.3091L3 21L4.69091 15.6698C4.24687 14.544 4 13.3023 4 12C4 7.58172 8.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" />
    </svg>
  </div>
</div>


















</div>
      </div>
      </div>
    </>
  );
  
}

export default App;
