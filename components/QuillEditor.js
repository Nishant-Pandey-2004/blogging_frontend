// components/QuillEditor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const QuillEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={{
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          [{ align: [] }],
          ['clean'],
        ],
      }}
    />
  );
};

export default QuillEditor;
