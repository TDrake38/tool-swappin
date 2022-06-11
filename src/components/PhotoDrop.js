import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'


function MyUploader (){
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    //TODO: make this only take in one photo, turn it into base 64 and store console log it. THENNNN -> when that works store it in the database and show under search after. 
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }
    return (
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*"
        name="photo"
      />
    )
  }
  
  export default MyUploader;