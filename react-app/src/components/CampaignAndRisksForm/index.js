import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { patchProject } from "../../store/project";
import { useDispatch } from "react-redux";


function CampaignAndRisksForm(){

  const projectId = 1;
  let campaign = "";
  const dispatch = useDispatch();

  const handleSubmit = () =>{
    const payload = {
      projectId,
      campaign
    }
    dispatch(patchProject(payload));
  }

  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ ClassicEditor }
        config={ {
          //plugins: [ Bold, Italic, Essentials, Paragraph ],
          //toolbar: [ 'bold', 'italic' ]
        } }

        onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
            campaign = editor.getData();
            console.log( { event, editor, campaign } );
        } }
        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
      />
      <button onClick={handleSubmit}>aaaaaaaaaaaa</button>
    </div>

  )
}

export default CampaignAndRisksForm
