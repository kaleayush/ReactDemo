function AButton(){
  const user={
    userName:"ayush",
    email:"ayushkale85.33@gmail.com"
  }
 

  return <>
    <input type="text" placeholder="Enter name" id="username" className="" />
    <br/>
    <input type="text" placeholder="Enter emal" id="email" className=""/>
    <button type="button" id="button">Signin</button>
    <p>userName is ${user.userName} and email is ${user.email}</p>
  </>
}
function Ayush(){
  return (<>
      <h1>hellow this is create react app demo project</h1>
      <AButton/>
  </>
  )
}
export default Ayush