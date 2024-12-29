import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyToClipboardWithLibrary = () => {
  const [text, setText] = useState("This is some text to copy!");
  const [copied, setCopied] = useState(false);

  return (
    <div className="p-2 flex justify-center items-center">
      <div className="bg-gray-100 p-2 rounded-md shadow-md">
        <p className="text-xl font-bold mb-2">Copy to Clipboard with Library</p>
        <textarea
          className="p-2 border border-gray-300 w-full mb-4"
          rows="2"
          readOnly
          value={text}
        />
        <CopyToClipboard
          text={text}
          onCopy={() => setCopied(true)}
        >
          <button className="px-2 py-2 bg-blue-500 text-white rounded-md">
            {copied ? "Copied!" : "Copy Text"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopyToClipboardWithLibrary;
