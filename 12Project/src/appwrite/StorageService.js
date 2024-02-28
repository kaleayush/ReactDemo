import config from '../config/config';
import {Client,Storage,ID} from 'appwrite'



export class StorageService {
  client = new Client();
  storage;
  constructor() {
    this.client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65d43c42184be5fefdd2');
    this.storage=new Storage(this.client);
    
  }
  async uploadFile(file){
    try {
      console.log(config.appwriteBucketID,"buketid")
      return await this.storage.createFile(config.appwriteBucketID,ID.unique(),file)
    } catch (error) {
      console.log("uploadFile method of storageService",error)
      return false
    }
  }
  async deleteFile(fileId){
    try {
      return await this.storage.deleteFile(config.appwriteBucketID,fileId)
    } catch (error) {
      console.log("deleteFile method of storageService",error)
    }

  }
   async getFilePreview(fileId){
  
    try {
      const result= this.storage.getFilePreview(config.appwriteBucketID,fileId);
      console.log(result.href,"this is getFilePreview method")
      return result.href;
    } catch (error) {
      console.log("Get file preview method of storageService",error)
    }
  }
  async getFilePreview1(fileId){
    try {
      let imageurl=''
      const result= this.storage.getFilePreview(config.appwriteBucketID,fileId);
      console.log(result.href,"this is getFilePreview1 method")
      imageurl=result.href
      return imageurl;
    } catch (error) {
      console.log("Get file preview method of storageService",error)
    }
  }
}

const storageService = new StorageService() 
export default storageService;