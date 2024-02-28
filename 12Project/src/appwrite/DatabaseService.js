import config from '../config/config';
import congf from '../config/config';
import {Client,Databases, Query} from 'appwrite'


export class DatabaseService{
  client=new Client()
  databases;
  constructor(){
    this.client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65d43c42184be5fefdd2');
    this.databases=new Databases(this.client);
  }
  async createPost({title,slug,content,featuredImage,status,userId}){
    console.log(config.appwriteDataBaseID,"databaseId")
    console.log(slug,"slug in create Post")
    try {
      return await this.databases.createDocument(
        '65d444afbacdc6570fb8',
        '65d444dbe71f77d32285',
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      );
    } catch (error) {
      console.error('error occure in create post method of databaseService',error)
    }
  } 
  async updatePost(slug,{title,content,featuredImage,status}){
    try {
      return await this.databases.updateDocument('65d444afbacdc6570fb8','65d444dbe71f77d32285',
      slug,
      {
        title,
        content,
        featuredImage,
        status
      }
      )
    } catch (error) {
      console.error('error occure in update post method of storageService',error)
    }
  }
  async deletePost(slug){
    try {
      return await this.databases.deleteDocument('65d444afbacdc6570fb8','65d444dbe71f77d32285',slug)
    } catch (error) {
      console.error('error occure in delete post method of storageService',error)
    }
  }
  async getPostById(slug){
    try {
      return await this.databases.getDocument('65d444afbacdc6570fb8','65d444dbe71f77d32285',slug)
    } catch (error) {
      console.error('error occure in getpostById method of storageService',error)
    }
  }
  async getAllPosts(queries=[Query.equal('status','active')]){
    try {
      return await this.databases.listDocuments('65d444afbacdc6570fb8','65d444dbe71f77d32285',queries)
    } catch (error) {
      console.error('error occure in getAllPosts method of databaseService',error)
    }
  }
}
const databaseService=new DatabaseService()
export default databaseService;