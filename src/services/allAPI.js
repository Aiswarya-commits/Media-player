import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"




// addVideo API
export const addVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}
// getVideo API
export const getAllVideoAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}
// getAvideo
export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}
// deleteVideo
export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}
// addHistory
export const addHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}
// getHistory
export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}
// deleteHistory
export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}
// addCategory API
export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}
// getCategory API
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}
// deleteCategory
export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}
// updateCategoryAPI
export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}



