import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "~!@#$%^&*(){}[]";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllow, charAllow, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [numberAllow, charAllow, length, setPassword]);

  return (
    <div className="flex shadow rounded-md mb-4 overflow-hidden">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        ref={passwordRef}
        readOnly
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={copyPasswordToClipboard}
      >
        Copy
      </button>

      <div>
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label className="ml-1">Length: {length}</label>
      </div>
      <div className="ml-2">
        <input
          type="checkbox"
          checked={numberAllow}
          onChange={() => setNumberAllow((prev) => !prev)}
        />
        <label className="ml-1">Numbers</label>
      </div>
      <div className="ml-2">
        <input
          type="checkbox"
          checked={charAllow}
          onChange={() => setCharAllow((prev) => !prev)}
        />
        <label className="ml-1">Special Char Allow</label>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberallow, setNumberAllow] = useState(false);
//   const [charallow, setCharallow] = useState(false);
//   const [Password, setPassword] = useState("");

//   const Passwordref = useRef(null);
//   const copyPasswordtoclipborad = useCallback(() => {
//     Passwordref.current?.select();
//     //Passwordref.current?.setSelectionRange(0,5)
//     window.navigator.clipboard.writeText(Password);
//   }, [Password]);

//   const PasswordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";
//     if (numberallow) str += "0123456789";
//     if (charallow) str += "~!@#$%^&*(){}[]";
//     for (let i = 1; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [numberallow, charallow, length, setPassword]);

//   useEffect(() => {
//     PasswordGenerator();
//   }, [numberallow, charallow, length, setPassword]);
//   return (
//     <>
//       <div className="flex shadow rounded-md mb-4 overflow-hidden">
//         <input
//           type="text"
//           value={Password}
//           className="outline-none w-full py-1 px-3"
//           placeholder="Password"
//           ref={Passwordref}
//           readOnly
//         />
//         <button onClick={copyPasswordtoclipborad}> Copy</button>
//         <div>
//           {" "}
//           <input
//             type="range"
//             min={6}
//             max={20}
//             value={length}
//             onChange={(e) => {
//               setLength(e.target.value);
//             }}
//           />
//           <label>Length :- {length}</label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             defaultChecked={numberallow}
//             onChange={() => {
//               setNumberAllow((preval) => !preval);
//             }}
//           />
//           <label>Numbers</label>
//         </div>
//         <input
//           type="checkbox"
//           defaultChecked={charallow}
//           onChange={() => {
//             setCharallow((preval1) => !preval1);
//           }}
//         />

//         <label>specal char allow</label>
//       </div>
//     </>
//   );
// }

// export default App;
