import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const MyRichTextEditor = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <ReactQuill
        value={value} // Controlled value from parent
        onChange={onChange} // onChange handler from parent
        className="bg-gray-50   dark:bg-gray-700 text-gray-900 dark:text-gray-200 border rounded-lg"
        theme="snow"

        placeholder={placeholder || "Enter long description"}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"], // Remove formatting button
          ],
        }}
      />
    </div>
  );
};

export default MyRichTextEditor;
