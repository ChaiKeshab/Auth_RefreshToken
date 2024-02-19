import React, { FC, InputHTMLAttributes } from 'react';

interface InputFileProps {
    setImage: (file: File | null) => void;
}

const ImageInput: FC<InputFileProps & InputHTMLAttributes<HTMLInputElement>> = ({
    setImage,
    className,
    id
}) => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (fileList && fileList.length > 0) {
            const selectedFile = fileList[0];

            // Check if the selected file is an image (you can adjust the allowed file types)
            if (selectedFile.type.startsWith('image/')) {
                setImage(selectedFile);
            } else {
                // Handle case when the selected file is not an image
                setImage(null);
                console.log('Please select a valid image file.');
            }
        } else {
            setImage(null);
        }
    };

    return (
        <input
            id={id}
            className={`${className}`}
            type="file"
            accept="image/*" // Accept any image file type
            onChange={handleFileChange}
        />
    );
};

export default ImageInput;
