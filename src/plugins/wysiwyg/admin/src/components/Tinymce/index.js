import React from "react";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";

const TinyEditor = ({ onChange, name, value }) => {
  return (
    <Editor
      apiKey="4gafgepd991l2gi3cwtmhqyebuoc028nmagbtbo7svz0kh0r"
      value={value}
      tagName={name}
      onEditorChange={(editorContent) => {
        onChange({ target: { name, value: editorContent } });
      }}
      outputFormat="html"
      init={{
        branding: false,
        contextmenu: false,
        menubar: false,
        plugins: "preview lists link autolink",
        selector: "textarea",
        block_formats: "Alinea=p; Kop=h2; Tussenkop=h3",
        skin: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "oxide-dark"
          : "",
        content_css: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "",
        toolbar: "undo redo | blocks bold italic bullist numlist | link",
        default_link_target: "_blank",
      }}
    />
  );
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default TinyEditor;
