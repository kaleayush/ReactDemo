const config={
appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROEJCTID),
appwriteCollectionID : String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
appwriteDataBaseID : String(import.meta.env.VITE_APPWRITE_DATABASEID),
appwriteBucketID : String(import.meta.env.VITE_APPWRITE_BUCKETID),
}


export default config;