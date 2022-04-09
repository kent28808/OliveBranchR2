import Link from "next/link";
import Head from 'next/head'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import Statusbar from '@uppy/status-bar'
import { Dashboard } from '@uppy/react'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'


const uppy = new Uppy()
	.use(Tus, {
		endpoint: 'https://tusd.tusdemo.net/files/'
	});

uppy.on('complete', (result) => {
	console.log('Upload complete!', result.successful)
})


export default function Home() {
  return (
    <div className="container">
			<Dashboard
				uppy={uppy}
			/>	
      <Link href='/previewPhoto' passHref>
        <button>Next</button>
      </Link>
  	</div>
	)
}




// Uppy Config
// const uppy = new Uppy({
//   id: 'uppy',
//   autoProceed: false,
//   allowMultipleUploadBatches: true,
//   debug: false,
//   restrictions: {
//     maxFileSize: null,
//     minFileSize: null,
//     maxTotalFileSize: null,
//     maxNumberOfFiles: null,
//     minNumberOfFiles: null,
//     allowedFileTypes: null,
//     requiredMetaFields: [],
//   },
//   meta: {},
//   onBeforeFileAdded: (currentFile, files) => currentFile,
//   onBeforeUpload: (files) => {},
//   locale: {},
//   store: new DefaultStore(),
//   logger: justErrorsLogger,
//   infoTimeout: 5000,
// })




// const uploadPhotoScreen = () => {
//   return (
//     <div>
//       <h1>Next, let's make sure your partner can see you.</h1>
//       <br></br>
//       <p>
//         Pick a moment from your photos to remind both of you the happy days.
//       </p>
//       <Link href='/previewPhoto' passHref>
//         <button>Next</button>
//       </Link>
//     </div>
//   );
// };

// export default uploadPhotoScreen;
