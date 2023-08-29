import React, { useState, useRef } from "react";

export default function Atbash() {
  const [abjad, setAbjad] = useState("abcdefghijklmnopqrstuvwxyz");
  // Ref Hooks
  const plaintext = useRef();
  const ciphertext = useRef();
  const keyCiphertext = useRef();

  // state
  const [cipherState, setCipherState] = useState(null);
  const [plainState, setPlainState] = useState(null);

  // Button Action
  const encrypt = () => {
    const plain = plaintext.current.value;
    if (plain !== "") {
      runEncrypt(plain, "encrypt");
    } else {
      alert("nda boleh kosong");
    }
  };

  const decrypt = () => {
    const cipher = ciphertext.current.value;
    if (cipher !== "") {
      runEncrypt(cipher, "decrypt");
    } else {
      alert("nda boleh kosong");
    }
  };

  // function
  const runEncrypt = (plaintext, reqState) => {
    const subPlainText = plaintext.split(" ");
    let cipherArray = [];
    subPlainText.forEach((karakter) => {
      let text = "";
      for (let index = 0; index < karakter.length; index++) {
        const element = karakter[index];
        const indexElement = parseInt(abjad.indexOf(element)) * -1;
        const cipherIndex = (indexElement + 25) % 26;
        text += abjad[cipherIndex];
      }
      cipherArray.push(text);
      let outputStream = cipherArray.toString().replaceAll(",", " ");
      if (reqState == "encrypt") {
        setCipherState(outputStream);
      } else {
        setPlainState(outputStream);
      }
    });
  };

  return (
    <div className='bg-gradient-to-r from-slate-400 to-blue-800 w-full h-screen text-white'>
      <h1 className='text-center font-bold text-3xl py-4'>
        Atbash Cipher (ReactJs)
      </h1>
      <div className='flex flex-row justify-items-center mt-12'>
        <div className='flex-1 mx-8'>
          <div>
            <label className='block text-sm font-medium'>Plain Text</label>
            <textarea
              ref={plaintext}
              placeholder='Input your plaintext ....'
              className='w-full h-64 mt-2 p-2 border text-slate-900 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mt-4'>
            <button
              onClick={() => encrypt()}
              className='w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
            >
              Encrypt
            </button>
          </div>
          <div className='mt-4'>
            <p>
              Cipher text :{" "}
              {cipherState == null ? (
                ""
              ) : (
                <span className='bg-slate-500 px-1'>{cipherState}</span>
              )}
            </p>
          </div>
        </div>
        <div className='flex-1 mx-8'>
          <div>
            <label className='block text-sm font-medium'>Cipher Text</label>
            <textarea
              ref={ciphertext}
              placeholder='Input your cipher text ....'
              className='w-full h-64 mt-2 p-2 border text-slate-900 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mt-4'>
            <button
              onClick={() => decrypt()}
              className='w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
            >
              Decrypt
            </button>
          </div>
          <div className='mt-4'>
            <p>
              Plain text :{" "}
              {plainState == null ? (
                ""
              ) : (
                <span className='bg-slate-500 px-1'>{plainState}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
