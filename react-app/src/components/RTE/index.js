import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './RTE.css';

function RTE({campaign, handleRTE}){


  return (
    <div className="rte-body">
      <CKEditor
        editor={ ClassicEditor }
        data={campaign}
        config={ {
          removePlugins: [ 'Table', 'MediaEmbed', 'InsertImage', 'EasyImage' ]
        } }

        onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          handleRTE(data)
          console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
      />
    </div>

  )
}

export default RTE
