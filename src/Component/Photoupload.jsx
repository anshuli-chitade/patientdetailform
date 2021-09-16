import React from 'react';
// import SidebarData from "./SidebarData";

export default function ProfilePhotoCard() {
  const uploadedImage = React.useRef(null)
  const imageUploader = React.useRef(null)

  const handleImageUpload = (e) => {
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      const { current } = uploadedImage
      current.file = file
      reader.onload = (e) => {
        current.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <div>
      <div className="sm:px-6 mt-2 xl:ml-12 lg:ml-3 md:ml-0 xl:w-80 lg:w-80 md:w-72 w-60">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded py-10 xl:w-80 p-16 mx-auto px-1 sm:px-6">
          <div>
            <div className="font-semibold">Photo</div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{
                display: 'none',
              }}
            />
            <div onClick={() => imageUploader.current.click()}>
              <img
                className="mt-5 xl:w-64 lg:w-80 md:w-full w-full h-60 cursor-pointer"
                src="/static/images/imagecard.png"
                alt="imagecard"
                ref={uploadedImage}
              />
              <div
                className="flex space-x-2 border-2 mt-5 xl:w-64 xl:text-sm lg:text-xs md:text-xs text-sm p-3 cursor-pointer"
                style={{ borderColor: 'rgba(138, 170, 229, 1)' }}
              >
                <div>
                  <img
                    src="/static/images/document.png"
                    alt="document"
                    className="xl:ml-4 lg:ml-2 xl:h-5 lg:h-4 xl:block lg:block md:hidden block"
                  />
                </div>
                <div style={{ color: 'rgba(138, 170, 229, 1)' }}>UPLOAD PROFILE IMAGE</div>
              </div>
            </div>
            <div className="mt-5 w-64 xl:mx-3 lg:mx-2 md:mx-3 mx-5 xl:text-lg lg:text-base md:text-xs text-gray-500">
              *Maximum 500px x 500px
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}