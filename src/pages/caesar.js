import React, { useState, useRef } from "react";

export default function Caesar() {
  // eslint-disable-next-line
  const [abjad, setAbjad] = useState("abcdefghijklmnopqrstuvwxyz");
  // Ref Hooks
  const plaintext = useRef();
  const keyPlainText = useRef();
  const ciphertext = useRef();
  const keyCiphertext = useRef();

  // state
  const [cipherState, setCipherState] = useState(null);
  const [plainState, setPlainState] = useState(null);

  // Button Action
  const encrypt = () => {
    const plain = plaintext.current.value;
    const key = keyPlainText.current.value;
    if (plain !== "" && key !== "") {
      runEncrypt(plain, key);
    } else {
      console.log("nda boleh kosong");
    }
  };

  const decrypt = () => {
    const cipher = ciphertext.current.value;
    const key = keyCiphertext.current.value;
    if (cipher !== "" && key !== "") {
      runDecrypt(cipher, key);
    } else {
      console.log("nda boleh kosong");
    }
  };

  // function
  const runEncrypt = (plaintext, key) => {
    const subPlainText = plaintext.split(" ");
    let textArray = [];
    subPlainText.forEach((karakter) => {
      let text = "";
      for (let index = 0; index < karakter.length; index++) {
        const element = karakter[index];
        const cipher = (abjad.indexOf(element) + parseInt(key)) % 26;
        const cipherOutput = abjad[cipher];
        text += cipherOutput;
      }
      textArray.push(text);
    });
    let outputStream = textArray.toString().replaceAll(",", " ");
    setCipherState(outputStream);
  };

  const runDecrypt = (ciphertext, key) => {
    const subCipherText = ciphertext.split(" ");
    let textArray = [];
    subCipherText.forEach((karakter) => {
      let text = "";
      for (let index = 0; index < karakter.length; index++) {
        const element = karakter[index];
        let cipher = (abjad.indexOf(element) - parseInt(key)) % 26;
        if (cipher < 0) {
          cipher += 26;
        }
        const cipherOutput = abjad[cipher];
        text += cipherOutput;
      }
      textArray.push(text);
    });
    let outputStream = textArray.toString().replaceAll(",", " ");
    setPlainState(outputStream);
  };

  return (
    <div className='bg-gradient-to-r from-slate-400 to-blue-800 w-full h-screen text-white'>
      <h1 className='text-center font-bold text-3xl py-4'>
        Caesar Cipher (ReactJs)
      </h1>
      <div className='flex flex-row justify-items-center mt-12'>
        <div className='flex-1 mx-8'>
          <div>
            <label className='block text-sm font-medium'>Plain Text</label>
            <textarea
              ref={plaintext}
              placeholder='Input you plaintext ....'
              className='w-full h-64 mt-2 p-2 border text-slate-900 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mt-4'>
            <label className='block text-sm font-medium'>Key (1 - 26)</label>
            <input
              ref={keyPlainText}
              type='number'
              max={26}
              min={2}
              placeholder='Input you Key ....'
              className='w-full mt-2 p-2 border text-slate-900 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mt-4'>
            <button
              onClick={() => encrypt()}
              className='w-full bg-black text-white font-bold py-2 px-4 rounded'
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
              placeholder='Input you plaintext ....'
              className='w-full h-64 mt-2 p-2 border text-slate-900 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mt-4'>
            <label className='block text-sm font-medium'>Key (1 - 26)</label>
            <input
              ref={keyCiphertext}
              type='number'
              max={26}
              min={2}
              placeholder='Input you Key ....'
              className='w-full mt-2 p-2 border text-slate-900 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div className='mt-4'>
            <button
              onClick={() => decrypt()}
              className='w-full bg-black text-white font-bold py-2 px-4 rounded'
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
