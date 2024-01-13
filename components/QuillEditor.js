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
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['link', 'image', 'video'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['blockquote', 'code-block'],
          [{'indent': '-1'}, {'indent': '+1'}],
          ['clean'],
        ],
      }}
    />
  );
};

export default QuillEditor;
