import React, { useState } from 'react';

const CopyToClipboard: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000); // Reset the "copied" state after 2 seconds
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div>
            <p>{textToCopy}</p>
            <button onClick={handleCopy}>
                {isCopied ? 'Copied! ✅' : 'Copy to Clipboard'}
            </button>
        </div>
    );
};

export default CopyToClipboard;