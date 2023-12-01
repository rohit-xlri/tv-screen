"use client"
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import EditVideoDialog from '../components/editVideoDialog'
import EditPostDialog from '../components/editPostDialog'
import EditNoticeDialog from '../components/editNoticeDialog'
import EditSinglePostDialog from '../components/editSinglePostDialog'
import EditSingleVideoDialog from '../components/editSingleVideoDialog'

export default function Admin() {

    const [display, setDisplay] = useState([])
    const [view, setView] = useState("template1")
    const [onLoop, setOnLoop] = useState(false)
    const [videoUrl, setVideoUrl] = useState("")
    const [post, setPost] = useState("")
    const [notice, setNotice] = useState("")
    const [editVideo, setEditVideo] = useState(false)
    const [isYoutube, setisYoutube] = useState(false)
    const [editPost, setEditPost] = useState(false)
    const [editNotice, setEditNotice] = useState(false)
    const [editsingleVideo, setEditSingleVideo] = useState(false)
    const [singelVideoUrl, setSingelVideoUrl] = useState("")
    const [singlePost, setSinglePost] = useState("")
    const [editSinglePost, seteditSinglePost] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const handleAddVideo = async () => {
        try {
          setIsLoading(true)
          const response = await axios.post("api/display/video",{url:videoUrl, isYoutube:isYoutube})
          alert(response.data?.message)
        } catch (error) {
          alert(error.message)
          console.log(error)
        } finally{
          getDisplay()
          setIsLoading(false)
          setVideoUrl("")
        }
    }

    const handleAddSingleVideo = async () => {
      try {
        setIsLoading(true)
        const response = await axios.post("api/display/singlevideo",{url:singelVideoUrl,isYoutube:isYoutube})
        alert(response.data?.message)
      } catch (error) {
        alert(error.message)
        console.log(error)
      } finally{
        getDisplay()
        setIsLoading(false)
        setSingelVideoUrl("")
      }
  }

    const handleAddPost = async () => {
      try {
        setIsLoading(true)
        const response = await axios.post("api/display/post",{url:post})
        alert(response.data?.message)
      } catch (error) {
        alert(error.message)
        console.log(error)
      } finally{
        getDisplay()
        setIsLoading(false)
        setPost("")
      }
  }

  const handleAddSinglePost = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post("api/display/singlePost",{url:singlePost})
      alert(response.data?.message)
    } catch (error) {
      alert(error.message)
      console.log(error)
    } finally{
      getDisplay()
      setIsLoading(false)
      setSinglePost("")
    }
}

  const handleAddNotice = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post("api/display/notice",{text:notice})
      alert(response.data?.message)
    } catch (error) {
      alert(error.message)
      console.log(error)
    } finally{
      getDisplay()
      setIsLoading(false)
      setNotice("")
    }
}

const handleDeleteVideo = async (id) => {
  try {
    setIsLoading(true)
    const response = await axios.delete(`api/display/video/${id}`)
    alert(response.data?.message)
  } catch (error) {
    alert(error.message)
    console.log(error)
  } finally{
    getDisplay()
    setIsLoading(false)
  }
}

const handleDeleteSingleVideo = async (id) => {
  try {
    setIsLoading(true)
    const response = await axios.delete(`api/display/singlevideo/${id}`)
    alert(response.data?.message)
  } catch (error) {
    alert(error.message)
    console.log(error)
  } finally{
    getDisplay()
    setIsLoading(false)
  }
}

const handleDeletePost = async (id) => {
  try {
    setIsLoading(true)
    const response = await axios.delete(`api/display/post/${id}`)
    alert(response.data?.message)
  } catch (error) {
    alert(error.message)
    console.log(error)
  } finally{
    getDisplay()
    setIsLoading(false)
  }
}

const handleDeleteSinglePost = async (id) => {
  try {
    setIsLoading(true)
    const response = await axios.delete(`api/display/singlePost/${id}`)
    alert(response.data?.message)
  } catch (error) {
    alert(error.message)
    console.log(error)
  } finally{
    getDisplay()
    setIsLoading(false)
  }
}

const handleDeleteNotice = async (id) => {
  try {
    setIsLoading(true)
    const response = await axios.delete(`api/display/notice/${id}`)
    alert(response.data?.message)
  } catch (error) {
    alert(error.message)
    console.log(error)
  } finally{
    getDisplay()
    setIsLoading(false)
  }
}

    // const updateDisplay = async () => {
    //   try {
    //     const response = await axios.post("api/display",{videos:[{url:"8s2KnMctF1o"},{url:"7oURYNfQV2A"}],posts:[{url:"https://media.licdn.com/dms/image/D4D22AQHAPns23xJNug/feedshare-shrink_1280/0/1699760629034?e=1702512000&v=beta&t=44H8Ps2YwMgzxBrGDYUBfZkyE9t3TD_x5_EosL2-jdM"},{url:"https://media.licdn.com/dms/image/D4D22AQFRRA-ZxoUYrQ/feedshare-shrink_800/0/1699449068163?e=1703116800&v=beta&t=uLvnd8CnTwMy8WvokF0DT-EAeB2VHNVeEfx_wzTO8dY"}],notices:[{text:"Admissions Open for AICTE Approved  PGCBM  PGCHRM (VIL Programs) - Session 2024-25"},{text:"XAT 2024 registrations are open now. For more details visit xatonline.in"}]})
    //     console.log(response.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    const getDisplay = async () => {
        try {
          setShowLoader(true)
          const response = await axios.get("api/display")
          setOnLoop(response.data?.display?.onLoop)
          setDisplay(response.data)
        } catch (error) {
          console.log(error)
        } finally{
          setShowLoader(false)
        }
      }

      const updateDisplay = async (id,e) => {
        try {
          const response = await axios.put(`api/display/${id}`,{onLoop:e})
        } catch (error) {
          console.log(error)
        } finally{
         getDisplay()
        }
      }

      // useEffect(() => {
      //   updateDisplay()
      // }, [view, onLoop])
      
    
      useEffect(() => {
        getDisplay()
      }, [])
  

  return (
    <>
    <EditVideoDialog open={editVideo} setOpen={setEditVideo} update={getDisplay}/>
    <EditPostDialog open={editPost} setOpen={setEditPost} update={getDisplay}/>
    <EditSingleVideoDialog open={editsingleVideo} setOpen={setEditSingleVideo} update={getDisplay}/>
    <EditSinglePostDialog open={editSinglePost} setOpen={seteditSinglePost} update={getDisplay}/>
    <EditNoticeDialog open={editNotice} setOpen={setEditNotice} update={getDisplay}/>

   <div className={`fixed bg-black overflow-hidden backdrop-blur-md w-full h-screen top-0 flex justify-center items-center ${showLoader?"":"hidden"}`}>
<div role="status" className=''>
    <svg aria-hidden="true" className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
</div> 

    <div className='max-w-screen-xl py-12 mx-auto'>
    <div className="flex justify-between">
        <h1 className='text-center text-3xl font-bold'>TV SCREEN</h1>
        <div>
        <label>On Loop:</label>
        <select className='bg-gray-700 px-4 py-2 ml-2 rounded-lg' value={onLoop} onChange={(e)=>updateDisplay(display?.display?._id,e.target.value)}>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        </div>
      </div>
        <div className='p-4 border-2 border-gray-600 rounded-lg my-8'>
        <h1 className='text-2xl font-semibold mb-8 text-center'>Main Video</h1>
        {
            display?.videos?.map((e,i)=>{
                return(
                     <div key={i} className='flex gap-12 items-center mb-4'>
                <p>{1+i}.</p>
                {
                  e?.isYoutube?
                <iframe
                    width="400px"
                    height="300px"
                    src={`https://www.youtube.com/embed/${e?.url}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    ></iframe>:
                    <video width="400" height="300" controls style={{zIndex:0}}>
                      <source src={e?.url} type="video/mp4"/>
                    </video>
                    }
                    <button disabled={isLoading} onClick={()=>handleDeleteVideo(e?._id)} className='bg-red-700 p-4 rounded-lg hover:bg-red-600 font-semibold'>REMOVE</button>
                    <button onClick={()=>setEditVideo(e)} className='bg-blue-500 p-4 rounded-lg hover:bg-blue-600 font-semibold '>EDIT</button>
            </div>
                )
            })
        }
            <h1 className='text-xl font-semibold mb-8 text-center'>Add New Video</h1>
            <div className='flex items-center justify-center gap-4'>
            <label htmlFor="" >Enter video ID/URL:</label>
            <input type="text" className='bg-gray-800 p-2 rounded-lg' value={videoUrl} onChange={(e)=>setVideoUrl(e.target.value)} />
            <div className='mx-4'></div>
            <div>
        <label>is Youtube video</label>
        <select className='bg-gray-700 px-4 py-2 ml-2 rounded-lg' value={isYoutube} onChange={(e)=>setisYoutube(e.target.value)}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        </div>
            <button disabled={videoUrl==="" || isLoading} onClick={handleAddVideo} className='bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 font-semibold'>ADD</button>
            </div>
        </div>  
        <div className='p-4 border-2 border-gray-600 rounded-lg my-8'>
        <h1 className='text-2xl font-semibold mb-8 text-center'>Posts</h1>
        {
            display?.posts?.map((e,i)=>{
                return(
                     <div key={i} className='flex gap-12 items-center mb-4'>
                <p>{1+i}.</p>
                <img
                    width="400px"
                    height="400px"
                    src={e?.url}
                  
                    />
                    <button disabled={isLoading} onClick={()=>handleDeletePost(e?._id)} className='bg-red-700 p-4 rounded-lg hover:bg-red-600 font-semibold'>REMOVE</button>
                    <button onClick={()=>setEditPost(e)} className='bg-blue-500 p-4 rounded-lg hover:bg-blue-600 font-semibold '>EDIT</button>
            </div>
                )
            })
        }
            <h1 className='text-xl font-semibold mb-8 text-center mt-12'>Add New post</h1>
            <div className='flex items-center justify-center gap-4'>
            <label htmlFor="" >Enter image URL:</label>
            <input type="text" className='bg-gray-800 p-2 rounded-lg' value={post} onChange={(e)=>setPost(e.target.value)} />
            <button disabled={post==="" || isLoading} onClick={handleAddPost} className='bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 font-semibold'>ADD</button>
            </div>
        </div>  
        <div className='p-4 border-2 border-gray-600 rounded-lg my-8'>
        <h1 className='text-2xl font-semibold mb-8 text-center'>News</h1>
        {
            display?.notices?.map((e,i)=>{
                return(
                     <div key={i} className='flex gap-12 items-center mb-4'>
                <p>{1+i}.</p>
                  <div className='p-4 bg-gray-900 rounded-lg w-[800px]'>{e?.text}</div>
                    <button disabled={isLoading} onClick={()=>handleDeleteNotice(e?._id)} className='bg-red-700 p-4 rounded-lg hover:bg-red-600 font-semibold'>REMOVE</button>
                    <button onClick={()=>setEditNotice(e)} className='bg-blue-500 p-4 rounded-lg hover:bg-blue-600 font-semibold '>EDIT</button>
            </div>
                )
            })
        }
            <h1 className='text-xl font-semibold mb-8 text-center mt-12'>Add New News</h1>
            <div className='flex items-center justify-center gap-4'>
            <label htmlFor="" >Enter News Text:</label>
            <textarea rows="4" cols="70" type="text" className='bg-gray-800 p-2 rounded-lg' value={notice} onChange={(e)=>setNotice(e.target.value)} />
            <button disabled={notice==="" || isLoading} onClick={handleAddNotice} className='bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 font-semibold'>ADD</button>
            </div>
        </div> 

         <div className='p-4 border-2 border-gray-600 rounded-lg my-8'>
        <h1 className='text-2xl font-semibold mb-8 text-center'>Full Screen Video</h1>
        {
            display?.singleVideos?.map((e,i)=>{
                return(
                     <div key={i} className='flex gap-12 items-center mb-4'>
                <p>{1+i}.</p>
                {
                  e?.isYoutube?
                <iframe
                    width="400px"
                    height="300px"
                    src={`https://www.youtube.com/embed/${e?.url}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    ></iframe>:
                    <video width="400" height="300" controls style={{zIndex:0}}>
                      <source src={e?.url} type="video/mp4"/>
                    </video>
                    }
                    <button disabled={isLoading} onClick={()=>handleDeleteSingleVideo(e?._id)} className='bg-red-700 p-4 rounded-lg hover:bg-red-600 font-semibold'>REMOVE</button>
                    <button onClick={()=>setEditSingleVideo(e)} className='bg-blue-500 p-4 rounded-lg hover:bg-blue-600 font-semibold '>EDIT</button>
            </div>
                )
            })
        }
            <h1 className='text-xl font-semibold mb-8 text-center'>Add New Video</h1>
            <div className='flex items-center justify-center gap-4'>
            <label htmlFor="" >Enter video ID/URL:</label>
            <input type="text" className='bg-gray-800 p-2 rounded-lg' value={singelVideoUrl} onChange={(e)=>setSingelVideoUrl(e.target.value)} />
            <div className='mx-4'></div>
            <div>
        <label>is Youtube video</label>
        <select className='bg-gray-700 px-4 py-2 ml-2 rounded-lg' value={isYoutube} onChange={(e)=>setisYoutube(e.target.value)}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        </div>
            <button disabled={singelVideoUrl==="" || isLoading} onClick={handleAddSingleVideo} className='bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 font-semibold'>ADD</button>
            </div>
        </div> 

         <div className='p-4 border-2 border-gray-600 rounded-lg my-8'>
        <h1 className='text-2xl font-semibold mb-8 text-center'>Full Screen Posts</h1>
        {
            display?.singlePosts?.map((e,i)=>{
                return(
                     <div key={i} className='flex gap-12 items-center mb-4'>
                <p>{1+i}.</p>
                <img
                    width="400px"
                    height="auto"
                    src={e?.url}
                  
                    />
                    <button disabled={isLoading} onClick={()=>handleDeleteSinglePost(e?._id)} className='bg-red-700 p-4 rounded-lg hover:bg-red-600 font-semibold'>REMOVE</button>
                    <button onClick={()=>seteditSinglePost(e)} className='bg-blue-500 p-4 rounded-lg hover:bg-blue-600 font-semibold '>EDIT</button>
            </div>
                )
            })
        }
            <h1 className='text-xl font-semibold mb-8 text-center mt-12'>Add New post</h1>
            <div className='flex items-center justify-center gap-4'>
            <label htmlFor="" >Enter image URL:</label>
            <input type="text" className='bg-gray-800 p-2 rounded-lg' value={singlePost} onChange={(e)=>setSinglePost(e.target.value)} />
            <button disabled={singlePost==="" || isLoading} onClick={handleAddSinglePost} className='bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 font-semibold'>ADD</button>
            </div>
        </div>    
    </div>
    </>
  )
}
