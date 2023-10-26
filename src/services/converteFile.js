import { toast } from 'react-toastify'

let setBannerBase64

export function convertFile(files) {
  const permittedFiles = ['image/png', 'image/jpeg', 'image/jpg']
  const maxSize = 5120 * 1024
  console.log('ok')

  if (files) {
    const fileRef = files[0]
    const fileType = fileRef.type
    const fileSize = fileRef.size

    if (!permittedFiles.includes(fileType)) {
      toast.error('Tipo de arquivo não permitido')
      setBannerBase64('')
      return
    }

    if (fileSize > maxSize) {
      toast.error('A imagem deve ter no máximo 5mb')
      setBannerBase64('')
      return
    }

    console.log('ok2')
    const reader = new FileReader()

    reader.readAsBinaryString(fileRef)
    reader.onload = (ev) => {
      const base64String = `data:${fileType};base64,${btoa(ev.target.result)}`

      const img = new Image()
      img.src = base64String

      img.onload = () => {
        // access the dimensions
        const width = img.width
        const height = img.height

        if (width !== 468 && height !== 60) {
          toast.error(
            'A imagem deve ter 468 pixels de largura e 60 pixels de altura',
          )
          setBannerBase64('')
          return
        }

        setBannerBase64(base64String)
      }
    }
  }
  console.log('ok3')
}
