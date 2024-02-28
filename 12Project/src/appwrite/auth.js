import conf from "../config/config";
import congf from "../config/config";
import { Client, Account, ID } from "appwrite";

// export class AuthService{
//   client=new Client();
//   account;
//   constructor(){
//     console.log(congf.appwriteUrl)
//     this.client
//         .setEndpoint(congf.appwriteUrl)
//         .setProject(congf.appwriteProjectId);
//         this.account=new Account(this.client);
//   }
//    async  CreateAccount({email,password,name}){
//     try {
//       const userAccount=await this.account.create(ID.unique(),email,password,name)
//       if(userAccount){
//           // if user is registerd then send to to login
//           return this.Login(email,password)
//       }
//       else{

//       }
//     } catch (error) {
//       throw error;
//     }
//    }
//    async Login({email,password}){
//     try {
//        const Login=await this.account.createEmailSession(email,password)
//        return Login
//     } catch (error) {
//       throw error;
//     }
//    }
//    async GetCurrentUser(){

//     // try {
//     //   console.log("sdfdfkvnc","getMethod of appwrite")
//     //  return await this.account.get()
//     // } catch (error) {
//     //   throw error;
//     // }
//     try {
//       const result=await this.account.get()
//       return result
//   } catch (error) {
//       console.log("Appwrite serive :: getCurrentUser :: error", error);
//   }
//   return null;
//    }
//    async Logout(){
//     try {
//       return await this.account.deleteSessions()
//     } catch (error) {
//       throw error
//     }
//    }
// }

export class AuthService {
  client = new Client();
  account;

  constructor() {
   
    this.client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65d43c42184be5fefdd2');
    //   .setProject(congf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
        console.log(email,password,"nfnjn");
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}


const authService = new AuthService();
export default authService;
